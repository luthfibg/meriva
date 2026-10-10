import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumOrganizationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationStatus | Prisma.EnumOrganizationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationStatus[] | Prisma.ListEnumOrganizationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationStatus[] | Prisma.ListEnumOrganizationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationStatusFilter<$PrismaModel> | $Enums.OrganizationStatus;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumOrganizationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationStatus | Prisma.EnumOrganizationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationStatus[] | Prisma.ListEnumOrganizationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationStatus[] | Prisma.ListEnumOrganizationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrganizationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrganizationStatusFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | Prisma.EnumMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.MemberRole[] | Prisma.ListEnumMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemberRole[] | Prisma.ListEnumMemberRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole;
};
export type EnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | Prisma.EnumMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.MemberRole[] | Prisma.ListEnumMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemberRole[] | Prisma.ListEnumMemberRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMemberRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMemberRoleFilter<$PrismaModel>;
};
export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
};
export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
};
export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
};
export type EnumRsvpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | Prisma.EnumRsvpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel> | $Enums.RsvpStatus;
};
export type EnumRsvpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | Prisma.EnumRsvpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRsvpStatusWithAggregatesFilter<$PrismaModel> | $Enums.RsvpStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumOrganizationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationStatus | Prisma.EnumOrganizationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationStatus[] | Prisma.ListEnumOrganizationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationStatus[] | Prisma.ListEnumOrganizationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationStatusFilter<$PrismaModel> | $Enums.OrganizationStatus;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumOrganizationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganizationStatus | Prisma.EnumOrganizationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrganizationStatus[] | Prisma.ListEnumOrganizationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrganizationStatus[] | Prisma.ListEnumOrganizationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrganizationStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrganizationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrganizationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrganizationStatusFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | Prisma.EnumMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.MemberRole[] | Prisma.ListEnumMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemberRole[] | Prisma.ListEnumMemberRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole;
};
export type NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | Prisma.EnumMemberRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.MemberRole[] | Prisma.ListEnumMemberRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MemberRole[] | Prisma.ListEnumMemberRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMemberRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMemberRoleFilter<$PrismaModel>;
};
export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
};
export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | Prisma.EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | Prisma.ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventTypeFilter<$PrismaModel>;
};
export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | Prisma.EnumEventStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventStatus[] | Prisma.ListEnumEventStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEventStatusFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | Prisma.EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.InvitationStatus[] | Prisma.ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumInvitationStatusFilter<$PrismaModel>;
};
export type NestedEnumRsvpStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | Prisma.EnumRsvpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel> | $Enums.RsvpStatus;
};
export type NestedEnumRsvpStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RsvpStatus | Prisma.EnumRsvpStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RsvpStatus[] | Prisma.ListEnumRsvpStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRsvpStatusWithAggregatesFilter<$PrismaModel> | $Enums.RsvpStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRsvpStatusFilter<$PrismaModel>;
};
