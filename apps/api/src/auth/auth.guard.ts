import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import type { AuthUser } from './auth-user.js';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    if (type !== 'Bearer' || !token) throw new UnauthorizedException();

    let payload: AuthUser;
    try {
      payload = await this.jwt.verifyAsync<AuthUser>(token);
    } catch {
      throw new UnauthorizedException();
    }

    // Keanggotaan dicek ke database di setiap request: anggota yang dikeluarkan
    // atau diubah perannya langsung berlaku tanpa menunggu token kedaluwarsa.
    const membership = await this.prisma.organizationMember.findUnique({
      where: {
        organizationId_userId: {
          organizationId: payload.orgId,
          userId: payload.sub,
        },
      },
      select: { role: true },
    });
    if (!membership) throw new UnauthorizedException();

    req.user = { ...payload, role: membership.role };
    return true;
  }
}
