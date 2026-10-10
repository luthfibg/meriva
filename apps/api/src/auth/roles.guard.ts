import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { MemberRole } from '../generated/prisma/enums.js';
import { ROLES_KEY } from './roles.decorator.js';

// Pakai setelah AuthGuard: @UseGuards(AuthGuard, RolesGuard)
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const required = this.reflector.getAllAndOverride<MemberRole[] | undefined>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!required?.length) return true;

    const { user } = context.switchToHttp().getRequest();
    if (!user || !required.includes(user.role)) {
      throw new ForbiddenException(
        'Peran Anda tidak diizinkan untuk tindakan ini',
      );
    }
    return true;
  }
}
