import { EventStatus, EventType } from '../../generated/prisma/enums.js';
export declare class ListEventsQueryDto {
    status?: EventStatus;
    type?: EventType;
    search?: string;
    page: number;
    limit: number;
}
