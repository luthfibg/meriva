import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Organization: 'Organization',
    User: 'User',
    OrganizationMember: 'OrganizationMember',
    Event: 'Event',
    Guest: 'Guest',
    GuestGroup: 'GuestGroup',
    Invitation: 'Invitation',
    Rsvp: 'Rsvp',
    CheckIn: 'CheckIn'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const OrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    logoUrl: 'logoUrl',
    status: 'status',
    createdAt: 'createdAt'
};
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt'
};
export const OrganizationMemberScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
};
export const EventScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    title: 'title',
    slug: 'slug',
    type: 'type',
    status: 'status',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    timezone: 'timezone',
    venue: 'venue',
    description: 'description',
    createdAt: 'createdAt'
};
export const GuestScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt'
};
export const GuestGroupScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    eventId: 'eventId',
    name: 'name',
    createdAt: 'createdAt'
};
export const InvitationScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    eventId: 'eventId',
    guestId: 'guestId',
    groupId: 'groupId',
    token: 'token',
    maxPax: 'maxPax',
    status: 'status',
    sentAt: 'sentAt',
    openedAt: 'openedAt',
    createdAt: 'createdAt'
};
export const RsvpScalarFieldEnum = {
    id: 'id',
    invitationId: 'invitationId',
    status: 'status',
    paxCount: 'paxCount',
    message: 'message',
    respondedAt: 'respondedAt'
};
export const CheckInScalarFieldEnum = {
    id: 'id',
    organizationId: 'organizationId',
    invitationId: 'invitationId',
    checkedInById: 'checkedInById',
    paxCount: 'paxCount',
    checkedInAt: 'checkedInAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map