import { SetMetadata } from '@nestjs/common';
import type { MemberRole } from '../generated/prisma/enums.js';

export const ROLES_KEY = 'roles';

// Tanpa @Roles(...) endpoint terbuka untuk semua anggota organisasi.
export const Roles = (...roles: MemberRole[]) => SetMetadata(ROLES_KEY, roles);
