export declare const OrganizationStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type OrganizationStatus = (typeof OrganizationStatus)[keyof typeof OrganizationStatus];
export declare const MemberRole: {
    readonly OWNER: "OWNER";
    readonly ADMIN: "ADMIN";
    readonly EVENT_MANAGER: "EVENT_MANAGER";
    readonly CHECKIN_STAFF: "CHECKIN_STAFF";
    readonly VIEWER: "VIEWER";
};
export type MemberRole = (typeof MemberRole)[keyof typeof MemberRole];
export declare const EventType: {
    readonly WEDDING: "WEDDING";
    readonly BIRTHDAY: "BIRTHDAY";
    readonly CORPORATE: "CORPORATE";
    readonly GATHERING: "GATHERING";
    readonly OTHER: "OTHER";
};
export type EventType = (typeof EventType)[keyof typeof EventType];
export declare const EventStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];
export declare const InvitationStatus: {
    readonly PENDING: "PENDING";
    readonly SENT: "SENT";
    readonly OPENED: "OPENED";
};
export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus];
export declare const RsvpStatus: {
    readonly ATTENDING: "ATTENDING";
    readonly DECLINED: "DECLINED";
};
export type RsvpStatus = (typeof RsvpStatus)[keyof typeof RsvpStatus];
