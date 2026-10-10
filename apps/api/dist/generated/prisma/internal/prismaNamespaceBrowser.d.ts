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
    readonly OrganizationMember: "OrganizationMember";
    readonly Event: "Event";
    readonly Guest: "Guest";
    readonly GuestGroup: "GuestGroup";
    readonly Invitation: "Invitation";
    readonly Rsvp: "Rsvp";
    readonly CheckIn: "CheckIn";
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
    readonly logoUrl: "logoUrl";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const OrganizationMemberScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly userId: "userId";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type OrganizationMemberScalarFieldEnum = (typeof OrganizationMemberScalarFieldEnum)[keyof typeof OrganizationMemberScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly title: "title";
    readonly slug: "slug";
    readonly type: "type";
    readonly status: "status";
    readonly startsAt: "startsAt";
    readonly endsAt: "endsAt";
    readonly timezone: "timezone";
    readonly venue: "venue";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const GuestScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly name: "name";
    readonly phone: "phone";
    readonly email: "email";
    readonly createdAt: "createdAt";
};
export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum];
export declare const GuestGroupScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly eventId: "eventId";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type GuestGroupScalarFieldEnum = (typeof GuestGroupScalarFieldEnum)[keyof typeof GuestGroupScalarFieldEnum];
export declare const InvitationScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly eventId: "eventId";
    readonly guestId: "guestId";
    readonly groupId: "groupId";
    readonly token: "token";
    readonly maxPax: "maxPax";
    readonly status: "status";
    readonly sentAt: "sentAt";
    readonly openedAt: "openedAt";
    readonly createdAt: "createdAt";
};
export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum];
export declare const RsvpScalarFieldEnum: {
    readonly id: "id";
    readonly invitationId: "invitationId";
    readonly status: "status";
    readonly paxCount: "paxCount";
    readonly message: "message";
    readonly respondedAt: "respondedAt";
};
export type RsvpScalarFieldEnum = (typeof RsvpScalarFieldEnum)[keyof typeof RsvpScalarFieldEnum];
export declare const CheckInScalarFieldEnum: {
    readonly id: "id";
    readonly organizationId: "organizationId";
    readonly invitationId: "invitationId";
    readonly checkedInById: "checkedInById";
    readonly paxCount: "paxCount";
    readonly checkedInAt: "checkedInAt";
};
export type CheckInScalarFieldEnum = (typeof CheckInScalarFieldEnum)[keyof typeof CheckInScalarFieldEnum];
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
