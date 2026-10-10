import {
  ConflictException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { randomBytes } from 'node:crypto';
import { PrismaService } from '../prisma/prisma.service.js';
import { LoginDto } from './dto/login.dto.js';
import { RegisterDto } from './dto/register.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  private slugify(text: string) {
    return (
      text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || 'org'
    );
  }

  private async issueToken(
    user: { id: string; name: string; email: string },
    membership: { organizationId: string; role: string },
  ) {
    const accessToken = await this.jwt.signAsync({
      sub: user.id,
      orgId: membership.organizationId,
      role: membership.role,
    });
    return {
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: membership.role,
        organizationId: membership.organizationId,
      },
    };
  }

  async register(dto: RegisterDto) {
    const email = dto.email.toLowerCase();
    const exists = await this.prisma.user.findUnique({ where: { email } });
    if (exists) throw new ConflictException('Email sudah terdaftar');

    const passwordHash = await hash(dto.password, 10);
    const slug = `${this.slugify(dto.organizationName)}-${randomBytes(3).toString('hex')}`;

    // User + Organization + keanggotaan OWNER dibuat dalam satu operasi atomik.
    const user = await this.prisma.user.create({
      data: {
        email,
        name: dto.name,
        passwordHash,
        memberships: {
          create: {
            role: 'OWNER',
            organization: { create: { name: dto.organizationName, slug } },
          },
        },
      },
      include: { memberships: true },
    });
    return this.issueToken(user, user.memberships[0]);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
      include: { memberships: { orderBy: { createdAt: 'asc' } } },
    });
    const valid = user && (await compare(dto.password, user.passwordHash));
    if (!user || !valid) {
      throw new UnauthorizedException('Email atau password salah');
    }

    const membership = dto.organizationId
      ? user.memberships.find((m) => m.organizationId === dto.organizationId)
      : user.memberships[0];
    if (!membership) {
      throw new ForbiddenException(
        'Akun tidak tergabung dalam organisasi yang dipilih',
      );
    }
    return this.issueToken(user, membership);
  }

  async me(userId: string, orgId: string) {
    const membership = await this.prisma.organizationMember.findUnique({
      where: { organizationId_userId: { organizationId: orgId, userId } },
      select: {
        role: true,
        user: { select: { id: true, name: true, email: true } },
        organization: { select: { id: true, name: true, slug: true } },
      },
    });
    // Keanggotaan sudah dihapus -> token lama tidak lagi berlaku untuk /auth/me
    if (!membership) throw new UnauthorizedException();
    return {
      ...membership.user,
      role: membership.role,
      organization: membership.organization,
    };
  }
}
