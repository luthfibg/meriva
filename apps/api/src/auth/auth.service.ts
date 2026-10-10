import {
  ConflictException,
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

  private async issueToken(user: {
    id: string;
    organizationId: string;
    role: string;
    name: string;
    email: string;
  }) {
    const accessToken = await this.jwt.signAsync({
      sub: user.id,
      orgId: user.organizationId,
      role: user.role,
    });
    return {
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        organizationId: user.organizationId,
      },
    };
  }

  async register(dto: RegisterDto) {
    const email = dto.email.toLowerCase();
    const exists = await this.prisma.user.findUnique({ where: { email } });
    if (exists) throw new ConflictException('Email sudah terdaftar');

    const passwordHash = await hash(dto.password, 10);
    const slug = `${this.slugify(dto.organizationName)}-${randomBytes(3).toString('hex')}`;

    const user = await this.prisma.user.create({
      data: {
        email,
        name: dto.name,
        passwordHash,
        organization: { create: { name: dto.organizationName, slug } },
      },
    });
    return this.issueToken(user);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });
    const valid = user && (await compare(dto.password, user.passwordHash));
    if (!user || !valid) {
      throw new UnauthorizedException('Email atau password salah');
    }
    return this.issueToken(user);
  }

  async me(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        organization: { select: { id: true, name: true, slug: true } },
      },
    });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}