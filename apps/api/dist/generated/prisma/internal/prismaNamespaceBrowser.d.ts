import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly Organization: "Organization";
    readonly User: "User";
    readonly Event: "Event";
    readonly Guest: "Guest";
    readonly Rsvp: "Rsvp";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OrganizationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly createdAt: "createdAt";
};
export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly name: "name";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly title: "title";
    readonly slug: "slug";
    readonly startsAt: "startsAt";
    readonly venue: "venue";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const GuestScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly eventId: "eventId";
    readonly name: "name";
    readonly phone: "phone";
    readonly category: "category";
    readonly maxPax: "maxPax";
    readonly token: "token";
    readonly createdAt: "createdAt";
};
export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum];
export declare const RsvpScalarFieldEnum: {
    readonly id: "id";
    readonly guestId: "guestId";
    readonly status: "status";
    readonly paxCount: "paxCount";
    readonly message: "message";
    readonly respondedAt: "respondedAt";
};
export type RsvpScalarFieldEnum = (typeof RsvpScalarFieldEnum)[keyof typeof RsvpScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
