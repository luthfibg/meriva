import type { Request } from 'express';
import type { MemberRole } from '../generated/prisma/enums.js';
export type AuthUser = {
    sub: string;
    orgId: string;
    role: MemberRole;
};
export type AuthedRequest = Request & {
    user: AuthUser;
};
