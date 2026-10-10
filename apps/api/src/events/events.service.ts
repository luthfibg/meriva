import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes } from 'node:crypto';
import type { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEventDto } from './dto/create-event.dto.js';
import { ListEventsQueryDto } from './dto/list-events.dto.js';
import { UpdateEventDto } from './dto/update-event.dto.js';

const isUniqueViolation = (e: unknown) =>
  typeof e === 'object' && e !== null && (e as { code?: string }).code === 'P2002';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  private slugify(text: string) {
    const slug = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
      .slice(0, 70)
      .replace(/-$/, '');
    return slug || 'event';
  }

  private assertTimeZone(timeZone: string) {
    try {
      new Intl.DateTimeFormat('en-US', { timeZone });
    } catch {
      throw new BadRequestException('timezone tidak valid');
    }
  }

  private assertRange(startsAt: Date, endsAt: Date | null) {
    if (endsAt && endsAt <= startsAt) {
      throw new BadRequestException('endsAt harus setelah startsAt');
    }
  }

  private async isSlugTaken(orgId: string, slug: string) {
    const found = await this.prisma.event.findUnique({
      where: { organizationId_slug: { organizationId: orgId, slug } },
      select: { id: true },
    });
    return !!found;
  }

  private async resolveSlug(orgId: string, title: string, requested?: string) {
    if (requested) {
      if (await this.isSlugTaken(orgId, requested)) {
        throw new ConflictException('Slug sudah dipakai');
      }
      return requested;
    }
    const base = this.slugify(title);
    let slug = base;
    for (let i = 0; i < 5; i++) {
      if (!(await this.isSlugTaken(orgId, slug))) return slug;
      slug = `${base}-${randomBytes(2).toString('hex')}`;
    }
    throw new ConflictException('Gagal membuat slug unik, coba judul lain');
  }

  async create(orgId: string, dto: CreateEventDto) {
    const startsAt = new Date(dto.startsAt);
    const endsAt = dto.endsAt ? new Date(dto.endsAt) : null;
    this.assertRange(startsAt, endsAt);
    if (dto.timezone) this.assertTimeZone(dto.timezone);

    const slug = await this.resolveSlug(orgId, dto.title, dto.slug);
    try {
      return await this.prisma.event.create({
        data: {
          organizationId: orgId,
          title: dto.title,
          slug,
          type: dto.type,
          startsAt,
          endsAt,
          timezone: dto.timezone,
          venue: dto.venue,
          description: dto.description,
        },
      });
    } catch (e) {
      // Balapan: slug yang sama dibuat bersamaan di antara pengecekan dan insert
      if (isUniqueViolation(e)) throw new ConflictException('Slug sudah dipakai');
      throw e;
    }
  }

  async findAll(orgId: string, q: ListEventsQueryDto) {
    const where: Prisma.EventWhereInput = {
      organizationId: orgId,
      ...(q.status ? { status: q.status } : {}),
      ...(q.type ? { type: q.type } : {}),
      ...(q.search
        ? { title: { contains: q.search, mode: 'insensitive' as const } }
        : {}),
    };

    const [data, total] = await this.prisma.$transaction([
      this.prisma.event.findMany({
        where,
        orderBy: [{ startsAt: 'desc' }, { id: 'asc' }],
        skip: (q.page - 1) * q.limit,
        take: q.limit,
        include: { _count: { select: { invitations: true } } },
      }),
      this.prisma.event.count({ where }),
    ]);

    return {
      data,
      meta: {
        page: q.page,
        limit: q.limit,
        total,
        totalPages: Math.ceil(total / q.limit),
      },
    };
  }

  // Event milik organisasi lain diperlakukan sama seperti tidak ada (404).
  async findOne(orgId: string, id: string) {
    const event = await this.prisma.event.findFirst({
      where: { id, organizationId: orgId },
      include: { _count: { select: { invitations: true, guestGroups: true } } },
    });
    if (!event) throw new NotFoundException('Acara tidak ditemukan');
    return event;
  }

  async update(orgId: string, id: string, dto: UpdateEventDto) {
    const current = await this.findOne(orgId, id);
    if (dto.timezone) this.assertTimeZone(dto.timezone);

    const startsAt = dto.startsAt ? new Date(dto.startsAt) : current.startsAt;
    const endsAt =
      dto.endsAt === undefined
        ? current.endsAt
        : dto.endsAt === null
          ? null
          : new Date(dto.endsAt);
    this.assertRange(startsAt, endsAt);

    return this.prisma.event.update({
      where: { id, organizationId: orgId },
      data: {
        // `?? undefined`: null pada kolom wajib berarti "jangan diubah"
        title: dto.title ?? undefined,
        type: dto.type ?? undefined,
        status: dto.status ?? undefined,
        timezone: dto.timezone ?? undefined,
        startsAt: dto.startsAt ? startsAt : undefined,
        endsAt: dto.endsAt === undefined ? undefined : endsAt,
        venue: dto.venue,
        description: dto.description,
      },
    });
  }

  async remove(orgId: string, id: string) {
    const event = await this.findOne(orgId, id);
    if (event._count.invitations > 0) {
      throw new ConflictException(
        'Acara sudah memiliki undangan dan tidak bisa dihapus. Ubah status menjadi CANCELLED.',
      );
    }
    await this.prisma.event.delete({ where: { id, organizationId: orgId } });
    return { deleted: true };
  }
}
