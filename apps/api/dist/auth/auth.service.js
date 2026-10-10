var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConflictException, ForbiddenException, Injectable, UnauthorizedException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { randomBytes } from 'node:crypto';
import { PrismaService } from '../prisma/prisma.service.js';
let AuthService = class AuthService {
    prisma;
    jwt;
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    slugify(text) {
        return (text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || 'org');
    }
    async issueToken(user, membership) {
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
    async register(dto) {
        const email = dto.email.toLowerCase();
        const exists = await this.prisma.user.findUnique({ where: { email } });
        if (exists)
            throw new ConflictException('Email sudah terdaftar');
        const passwordHash = await hash(dto.password, 10);
        const slug = `${this.slugify(dto.organizationName)}-${randomBytes(3).toString('hex')}`;
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
    async login(dto) {
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
            throw new ForbiddenException('Akun tidak tergabung dalam organisasi yang dipilih');
        }
        return this.issueToken(user, membership);
    }
    async me(userId, orgId) {
        const membership = await this.prisma.organizationMember.findUnique({
            where: { organizationId_userId: { organizationId: orgId, userId } },
            select: {
                role: true,
                user: { select: { id: true, name: true, email: true } },
                organization: { select: { id: true, name: true, slug: true } },
            },
        });
        if (!membership)
            throw new UnauthorizedException();
        return {
            ...membership.user,
            role: membership.role,
            organization: membership.organization,
        };
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map