export declare const UserRole: {
    readonly OWNER: "OWNER";
    readonly STAFF: "STAFF";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const RsvpStatus: {
    readonly ATTENDING: "ATTENDING";
    readonly DECLINED: "DECLINED";
};
export type RsvpStatus = (typeof RsvpStatus)[keyof typeof RsvpStatus];
