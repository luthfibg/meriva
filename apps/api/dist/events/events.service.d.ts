import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEventDto } from './dto/create-event.dto.js';
import { ListEventsQueryDto } from './dto/list-events.dto.js';
import { UpdateEventDto } from './dto/update-event.dto.js';
export declare class EventsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private slugify;
    private assertTimeZone;
    private assertRange;
    private isSlugTaken;
    private resolveSlug;
    create(orgId: string, dto: CreateEventDto): Promise<{
        id: string;
        slug: string;
        status: import("../generated/prisma/enums.js").EventStatus;
        createdAt: Date;
        organizationId: string;
        title: string;
        type: import("../generated/prisma/enums.js").EventType;
        startsAt: Date;
        endsAt: Date | null;
        timezone: string;
        venue: string | null;
        description: string | null;
    }>;
    findAll(orgId: string, q: ListEventsQueryDto): Promise<{
        data: ({
            _count: {
                invitations: number;
            };
        } & {
            id: string;
            slug: string;
            status: import("../generated/prisma/enums.js").EventStatus;
            createdAt: Date;
            organizationId: string;
            title: string;
            type: import("../generated/prisma/enums.js").EventType;
            startsAt: Date;
            endsAt: Date | null;
            timezone: string;
            venue: string | null;
            description: string | null;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(orgId: string, id: string): Promise<{
        _count: {
            guestGroups: number;
            invitations: number;
        };
    } & {
        id: string;
        slug: string;
        status: import("../generated/prisma/enums.js").EventStatus;
        createdAt: Date;
        organizationId: string;
        title: string;
        type: import("../generated/prisma/enums.js").EventType;
        startsAt: Date;
        endsAt: Date | null;
        timezone: string;
        venue: string | null;
        description: string | null;
    }>;
    update(orgId: string, id: string, dto: UpdateEventDto): Promise<{
        id: string;
        slug: string;
        status: import("../generated/prisma/enums.js").EventStatus;
        createdAt: Date;
        organizationId: string;
        title: string;
        type: import("../generated/prisma/enums.js").EventType;
        startsAt: Date;
        endsAt: Date | null;
        timezone: string;
        venue: string | null;
        description: string | null;
    }>;
    remove(orgId: string, id: string): Promise<{
        deleted: boolean;
    }>;
}
