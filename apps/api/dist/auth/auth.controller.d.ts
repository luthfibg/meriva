import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
import { RegisterDto } from './dto/register.dto.js';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
            organizationId: string;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
            organizationId: string;
        };
    }>;
    me(req: any): Promise<{
        role: import("../generated/prisma/enums.js").MemberRole;
        organization: {
            id: string;
            name: string;
            slug: string;
        };
        id: string;
        name: string;
        email: string;
    }>;
}
