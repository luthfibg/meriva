import { EventStatus, EventType } from '../../generated/prisma/enums.js';
export declare class UpdateEventDto {
    title?: string;
    type?: EventType;
    status?: EventStatus;
    startsAt?: string;
    endsAt?: string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
}
