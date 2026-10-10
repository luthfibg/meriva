import type { MemberRole } from '../generated/prisma/enums.js';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: MemberRole[]) => import("@nestjs/common").CustomDecorator<string>;
