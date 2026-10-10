import { EventType } from '../../generated/prisma/enums.js';
export declare class CreateEventDto {
    title: string;
    slug?: string;
    type?: EventType;
    startsAt: string;
    endsAt?: string;
    timezone?: string;
    venue?: string;
    description?: string;
}
