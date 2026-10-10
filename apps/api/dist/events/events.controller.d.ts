import type { AuthedRequest } from '../auth/auth-user.js';
import { CreateEventDto } from './dto/create-event.dto.js';
import { ListEventsQueryDto } from './dto/list-events.dto.js';
import { UpdateEventDto } from './dto/update-event.dto.js';
import { EventsService } from './events.service.js';
export declare class EventsController {
    private readonly events;
    constructor(events: EventsService);
    create(req: AuthedRequest, dto: CreateEventDto): Promise<{
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
    findAll(req: AuthedRequest, query: ListEventsQueryDto): Promise<{
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
    findOne(req: AuthedRequest, id: string): Promise<{
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
    update(req: AuthedRequest, id: string, dto: UpdateEventDto): Promise<{
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
    remove(req: AuthedRequest, id: string): Promise<{
        deleted: boolean;
    }>;
}
