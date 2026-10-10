var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException, } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
let AuthGuard = class AuthGuard {
    jwt;
    prisma;
    constructor(jwt, prisma) {
        this.jwt = jwt;
        this.prisma = prisma;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const [type, token] = req.headers.authorization?.split(' ') ?? [];
        if (type !== 'Bearer' || !token)
            throw new UnauthorizedException();
        let payload;
        try {
            payload = await this.jwt.verifyAsync(token);
        }
        catch {
            throw new UnauthorizedException();
        }
        const membership = await this.prisma.organizationMember.findUnique({
            where: {
                organizationId_userId: {
                    organizationId: payload.orgId,
                    userId: payload.sub,
                },
            },
            select: { role: true },
        });
        if (!membership)
            throw new UnauthorizedException();
        req.user = { ...payload, role: membership.role };
        return true;
    }
};
AuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [JwtService,
        PrismaService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map