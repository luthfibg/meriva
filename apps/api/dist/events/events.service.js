var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { randomBytes } from 'node:crypto';
import { PrismaService } from '../prisma/prisma.service.js';
const isUniqueViolation = (e) => typeof e === 'object' && e !== null && e.code === 'P2002';
let EventsService = class EventsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    slugify(text) {
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
    assertTimeZone(timeZone) {
        try {
            new Intl.DateTimeFormat('en-US', { timeZone });
        }
        catch {
            throw new BadRequestException('timezone tidak valid');
        }
    }
    assertRange(startsAt, endsAt) {
        if (endsAt && endsAt <= startsAt) {
            throw new BadRequestException('endsAt harus setelah startsAt');
        }
    }
    async isSlugTaken(orgId, slug) {
        const found = await this.prisma.event.findUnique({
            where: { organizationId_slug: { organizationId: orgId, slug } },
            select: { id: true },
        });
        return !!found;
    }
    async resolveSlug(orgId, title, requested) {
        if (requested) {
            if (await this.isSlugTaken(orgId, requested)) {
                throw new ConflictException('Slug sudah dipakai');
            }
            return requested;
        }
        const base = this.slugify(title);
        let slug = base;
        for (let i = 0; i < 5; i++) {
            if (!(await this.isSlugTaken(orgId, slug)))
                return slug;
            slug = `${base}-${randomBytes(2).toString('hex')}`;
        }
        throw new ConflictException('Gagal membuat slug unik, coba judul lain');
    }
    async create(orgId, dto) {
        const startsAt = new Date(dto.startsAt);
        const endsAt = dto.endsAt ? new Date(dto.endsAt) : null;
        this.assertRange(startsAt, endsAt);
        if (dto.timezone)
            this.assertTimeZone(dto.timezone);
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
        }
        catch (e) {
            if (isUniqueViolation(e))
                throw new ConflictException('Slug sudah dipakai');
            throw e;
        }
    }
    async findAll(orgId, q) {
        const where = {
            organizationId: orgId,
            ...(q.status ? { status: q.status } : {}),
            ...(q.type ? { type: q.type } : {}),
            ...(q.search
                ? { title: { contains: q.search, mode: 'insensitive' } }
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
    async findOne(orgId, id) {
        const event = await this.prisma.event.findFirst({
            where: { id, organizationId: orgId },
            include: { _count: { select: { invitations: true, guestGroups: true } } },
        });
        if (!event)
            throw new NotFoundException('Acara tidak ditemukan');
        return event;
    }
    async update(orgId, id, dto) {
        const current = await this.findOne(orgId, id);
        if (dto.timezone)
            this.assertTimeZone(dto.timezone);
        const startsAt = dto.startsAt ? new Date(dto.startsAt) : current.startsAt;
        const endsAt = dto.endsAt === undefined
            ? current.endsAt
            : dto.endsAt === null
                ? null
                : new Date(dto.endsAt);
        this.assertRange(startsAt, endsAt);
        return this.prisma.event.update({
            where: { id, organizationId: orgId },
            data: {
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
    async remove(orgId, id) {
        const event = await this.findOne(orgId, id);
        if (event._count.invitations > 0) {
            throw new ConflictException('Acara sudah memiliki undangan dan tidak bisa dihapus. Ubah status menjadi CANCELLED.');
        }
        await this.prisma.event.delete({ where: { id, organizationId: orgId } });
        return { deleted: true };
    }
};
EventsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], EventsService);
export { EventsService };
//# sourceMappingURL=events.service.js.map