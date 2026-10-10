import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EventModel = runtime.Types.Result.DefaultSelection<Prisma.$EventPayload>;
export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
export type EventMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    title: string | null;
    slug: string | null;
    type: $Enums.EventType | null;
    status: $Enums.EventStatus | null;
    startsAt: Date | null;
    endsAt: Date | null;
    timezone: string | null;
    venue: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type EventMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    title: string | null;
    slug: string | null;
    type: $Enums.EventType | null;
    status: $Enums.EventStatus | null;
    startsAt: Date | null;
    endsAt: Date | null;
    timezone: string | null;
    venue: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type EventCountAggregateOutputType = {
    id: number;
    organizationId: number;
    title: number;
    slug: number;
    type: number;
    status: number;
    startsAt: number;
    endsAt: number;
    timezone: number;
    venue: number;
    description: number;
    createdAt: number;
    _all: number;
};
export type EventMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    slug?: true;
    type?: true;
    status?: true;
    startsAt?: true;
    endsAt?: true;
    timezone?: true;
    venue?: true;
    description?: true;
    createdAt?: true;
};
export type EventMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    slug?: true;
    type?: true;
    status?: true;
    startsAt?: true;
    endsAt?: true;
    timezone?: true;
    venue?: true;
    description?: true;
    createdAt?: true;
};
export type EventCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    slug?: true;
    type?: true;
    status?: true;
    startsAt?: true;
    endsAt?: true;
    timezone?: true;
    venue?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
};
export type EventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventCountAggregateInputType;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
};
export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvent[P]> : Prisma.GetScalarType<T[P], AggregateEvent[P]>;
};
export type EventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithAggregationInput | Prisma.EventOrderByWithAggregationInput[];
    by: Prisma.EventScalarFieldEnum[] | Prisma.EventScalarFieldEnum;
    having?: Prisma.EventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
};
export type EventGroupByOutputType = {
    id: string;
    organizationId: string;
    title: string;
    slug: string;
    type: $Enums.EventType;
    status: $Enums.EventStatus;
    startsAt: Date;
    endsAt: Date | null;
    timezone: string;
    venue: string | null;
    description: string | null;
    createdAt: Date;
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
export type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]>;
}>>;
export type EventWhereInput = {
    AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    OR?: Prisma.EventWhereInput[];
    NOT?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    id?: Prisma.StringFilter<"Event"> | string;
    organizationId?: Prisma.StringFilter<"Event"> | string;
    title?: Prisma.StringFilter<"Event"> | string;
    slug?: Prisma.StringFilter<"Event"> | string;
    type?: Prisma.EnumEventTypeFilter<"Event"> | $Enums.EventType;
    status?: Prisma.EnumEventStatusFilter<"Event"> | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    timezone?: Prisma.StringFilter<"Event"> | string;
    venue?: Prisma.StringNullableFilter<"Event"> | string | null;
    description?: Prisma.StringNullableFilter<"Event"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    guestGroups?: Prisma.GuestGroupListRelationFilter;
    invitations?: Prisma.InvitationListRelationFilter;
};
export type EventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    venue?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    guestGroups?: Prisma.GuestGroupOrderByRelationAggregateInput;
    invitations?: Prisma.InvitationOrderByRelationAggregateInput;
};
export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    organizationId_slug?: Prisma.EventOrganizationIdSlugCompoundUniqueInput;
    AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    OR?: Prisma.EventWhereInput[];
    NOT?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    organizationId?: Prisma.StringFilter<"Event"> | string;
    title?: Prisma.StringFilter<"Event"> | string;
    slug?: Prisma.StringFilter<"Event"> | string;
    type?: Prisma.EnumEventTypeFilter<"Event"> | $Enums.EventType;
    status?: Prisma.EnumEventStatusFilter<"Event"> | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    timezone?: Prisma.StringFilter<"Event"> | string;
    venue?: Prisma.StringNullableFilter<"Event"> | string | null;
    description?: Prisma.StringNullableFilter<"Event"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    guestGroups?: Prisma.GuestGroupListRelationFilter;
    invitations?: Prisma.InvitationListRelationFilter;
}, "id" | "organizationId_slug">;
export type EventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    venue?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EventCountOrderByAggregateInput;
    _max?: Prisma.EventMaxOrderByAggregateInput;
    _min?: Prisma.EventMinOrderByAggregateInput;
};
export type EventScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventScalarWhereWithAggregatesInput | Prisma.EventScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventScalarWhereWithAggregatesInput | Prisma.EventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    type?: Prisma.EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType;
    status?: Prisma.EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeWithAggregatesFilter<"Event"> | Date | string;
    endsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null;
    timezone?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    venue?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Event"> | Date | string;
};
export type EventCreateInput = {
    id?: string;
    title: string;
    slug: string;
    type?: $Enums.EventType;
    status?: $Enums.EventStatus;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutEventsInput;
    guestGroups?: Prisma.GuestGroupCreateNestedManyWithoutEventInput;
    invitations?: Prisma.InvitationCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    title: string;
    slug: string;
    type?: $Enums.EventType;
    status?: $Enums.EventStatus;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    guestGroups?: Prisma.GuestGroupUncheckedCreateNestedManyWithoutEventInput;
    invitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutEventInput;
};
export type EventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    guestGroups?: Prisma.GuestGroupUpdateManyWithoutEventNestedInput;
    invitations?: Prisma.InvitationUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guestGroups?: Prisma.GuestGroupUncheckedUpdateManyWithoutEventNestedInput;
    invitations?: Prisma.InvitationUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateManyInput = {
    id?: string;
    organizationId: string;
    title: string;
    slug: string;
    type?: $Enums.EventType;
    status?: $Enums.EventStatus;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
    createdAt?: Date | string;
};
export type EventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventListRelationFilter = {
    every?: Prisma.EventWhereInput;
    some?: Prisma.EventWhereInput;
    none?: Prisma.EventWhereInput;
};
export type EventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventOrganizationIdSlugCompoundUniqueInput = {
    organizationId: string;
    slug: string;
};
export type EventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    venue?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    venue?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    venue?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EventScalarRelationFilter = {
    is?: Prisma.EventWhereInput;
    isNot?: Prisma.EventWhereInput;
};
export type EventCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutOrganizationInput, Prisma.EventUncheckedCreateWithoutOrganizationInput> | Prisma.EventCreateWithoutOrganizationInput[] | Prisma.EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutOrganizationInput | Prisma.EventCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.EventCreateManyOrganizationInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutOrganizationInput, Prisma.EventUncheckedCreateWithoutOrganizationInput> | Prisma.EventCreateWithoutOrganizationInput[] | Prisma.EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutOrganizationInput | Prisma.EventCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.EventCreateManyOrganizationInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutOrganizationInput, Prisma.EventUncheckedCreateWithoutOrganizationInput> | Prisma.EventCreateWithoutOrganizationInput[] | Prisma.EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutOrganizationInput | Prisma.EventCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.EventUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.EventCreateManyOrganizationInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.EventUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutOrganizationInput | Prisma.EventUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EventUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutOrganizationInput, Prisma.EventUncheckedCreateWithoutOrganizationInput> | Prisma.EventCreateWithoutOrganizationInput[] | Prisma.EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutOrganizationInput | Prisma.EventCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.EventUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.EventCreateManyOrganizationInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.EventUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutOrganizationInput | Prisma.EventUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType;
};
export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EventCreateNestedOneWithoutGuestGroupsInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutGuestGroupsInput, Prisma.EventUncheckedCreateWithoutGuestGroupsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutGuestGroupsInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutGuestGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutGuestGroupsInput, Prisma.EventUncheckedCreateWithoutGuestGroupsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutGuestGroupsInput;
    upsert?: Prisma.EventUpsertWithoutGuestGroupsInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutGuestGroupsInput, Prisma.EventUpdateWithoutGuestGroupsInput>, Prisma.EventUncheckedUpdateWithoutGuestGroupsInput>;
};
export type EventCreateNestedOneWithoutInvitationsInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutInvitationsInput, Prisma.EventUncheckedCreateWithoutInvitationsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutInvitationsInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutInvitationsInput, Prisma.EventUncheckedCreateWithoutInvitationsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutInvitationsInput;
    upsert?: Prisma.EventUpsertWithoutInvitationsInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutInvitationsInput, Prisma.EventUpdateWithoutInvitationsInput>, Prisma.EventUncheckedUpdateWithoutInvitationsInput>;
};
export type EventCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    slug: string;
    type?: $Enums.EventType;
    status?: $Enums.EventStatus;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    guestGroups?: Prisma.GuestGroupCreateNestedManyWithoutEventInput;
    invitations?: Prisma.InvitationCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    slug: string;
    type?: $Enums.EventType;
    status?: $Enums.EventStatus;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    guestGroups?: Prisma.GuestGroupUncheckedCreateNestedManyWithoutEventInput;
    invitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutOrganizationInput, Prisma.EventUncheckedCreateWithoutOrganizationInput>;
};
export type EventCreateManyOrganizationInputEnvelope = {
    data: Prisma.EventCreateManyOrganizationInput | Prisma.EventCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type EventUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.EventWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventUpdateWithoutOrganizationInput, Prisma.EventUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutOrganizationInput, Prisma.EventUncheckedCreateWithoutOrganizationInput>;
};
export type EventUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutOrganizationInput, Prisma.EventUncheckedUpdateWithoutOrganizationInput>;
};
export type EventUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.EventScalarWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyWithoutOrganizationInput>;
};
export type EventScalarWhereInput = {
    AND?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
    OR?: Prisma.EventScalarWhereInput[];
    NOT?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
    id?: Prisma.StringFilter<"Event"> | string;
    organizationId?: Prisma.StringFilter<"Event"> | string;
    title?: Prisma.StringFilter<"Event"> | string;
    slug?: Prisma.StringFilter<"Event"> | string;
    type?: Prisma.EnumEventTypeFilter<"Event"> | $Enums.EventType;
    status?: Prisma.EnumEventStatusFilter<"Event"> | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
    endsAt?: Prisma.DateTimeNullableFilter<"Event"> | Date | string | null;
    timezone?: Prisma.StringFilter<"Event"> | string;
    venue?: Prisma.StringNullableFilter<"Event"> | string | null;
    description?: Prisma.StringNullableFilter<"Event"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Event"> | Date | string;
};
export type EventCreateWithoutGuestGroupsInput = {
    id?: string;
    title: string;
    slug: string;
    type?: $Enums.EventType;
    status?: $Enums.EventStatus;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutEventsInput;
    invitations?: Prisma.InvitationCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutGuestGroupsInput = {
    id?: string;
    organizationId: string;
    title: string;
    slug: string;
    type?: $Enums.EventType;
    status?: $Enums.EventStatus;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    invitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutGuestGroupsInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutGuestGroupsInput, Prisma.EventUncheckedCreateWithoutGuestGroupsInput>;
};
export type EventUpsertWithoutGuestGroupsInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutGuestGroupsInput, Prisma.EventUncheckedUpdateWithoutGuestGroupsInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutGuestGroupsInput, Prisma.EventUncheckedCreateWithoutGuestGroupsInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutGuestGroupsInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutGuestGroupsInput, Prisma.EventUncheckedUpdateWithoutGuestGroupsInput>;
};
export type EventUpdateWithoutGuestGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    invitations?: Prisma.InvitationUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutGuestGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitations?: Prisma.InvitationUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateWithoutInvitationsInput = {
    id?: string;
    title: string;
    slug: string;
    type?: $Enums.EventType;
    status?: $Enums.EventStatus;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutEventsInput;
    guestGroups?: Prisma.GuestGroupCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutInvitationsInput = {
    id?: string;
    organizationId: string;
    title: string;
    slug: string;
    type?: $Enums.EventType;
    status?: $Enums.EventStatus;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    guestGroups?: Prisma.GuestGroupUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutInvitationsInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutInvitationsInput, Prisma.EventUncheckedCreateWithoutInvitationsInput>;
};
export type EventUpsertWithoutInvitationsInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutInvitationsInput, Prisma.EventUncheckedUpdateWithoutInvitationsInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutInvitationsInput, Prisma.EventUncheckedCreateWithoutInvitationsInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutInvitationsInput, Prisma.EventUncheckedUpdateWithoutInvitationsInput>;
};
export type EventUpdateWithoutInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    guestGroups?: Prisma.GuestGroupUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guestGroups?: Prisma.GuestGroupUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateManyOrganizationInput = {
    id?: string;
    title: string;
    slug: string;
    type?: $Enums.EventType;
    status?: $Enums.EventStatus;
    startsAt: Date | string;
    endsAt?: Date | string | null;
    timezone?: string;
    venue?: string | null;
    description?: string | null;
    createdAt?: Date | string;
};
export type EventUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guestGroups?: Prisma.GuestGroupUpdateManyWithoutEventNestedInput;
    invitations?: Prisma.InvitationUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guestGroups?: Prisma.GuestGroupUncheckedUpdateManyWithoutEventNestedInput;
    invitations?: Prisma.InvitationUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    status?: Prisma.EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    venue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventCountOutputType = {
    guestGroups: number;
    invitations: number;
};
export type EventCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guestGroups?: boolean | EventCountOutputTypeCountGuestGroupsArgs;
    invitations?: boolean | EventCountOutputTypeCountInvitationsArgs;
};
export type EventCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCountOutputTypeSelect<ExtArgs> | null;
};
export type EventCountOutputTypeCountGuestGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestGroupWhereInput;
};
export type EventCountOutputTypeCountInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationWhereInput;
};
export type EventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    title?: boolean;
    slug?: boolean;
    type?: boolean;
    status?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    timezone?: boolean;
    venue?: boolean;
    description?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    guestGroups?: boolean | Prisma.Event$guestGroupsArgs<ExtArgs>;
    invitations?: boolean | Prisma.Event$invitationsArgs<ExtArgs>;
    _count?: boolean | Prisma.EventCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    title?: boolean;
    slug?: boolean;
    type?: boolean;
    status?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    timezone?: boolean;
    venue?: boolean;
    description?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    title?: boolean;
    slug?: boolean;
    type?: boolean;
    status?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    timezone?: boolean;
    venue?: boolean;
    description?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    title?: boolean;
    slug?: boolean;
    type?: boolean;
    status?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    timezone?: boolean;
    venue?: boolean;
    description?: boolean;
    createdAt?: boolean;
};
export type EventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "title" | "slug" | "type" | "status" | "startsAt" | "endsAt" | "timezone" | "venue" | "description" | "createdAt", ExtArgs["result"]["event"]>;
export type EventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    guestGroups?: boolean | Prisma.Event$guestGroupsArgs<ExtArgs>;
    invitations?: boolean | Prisma.Event$invitationsArgs<ExtArgs>;
    _count?: boolean | Prisma.EventCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type EventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $EventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Event";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        guestGroups: Prisma.$GuestGroupPayload<ExtArgs>[];
        invitations: Prisma.$InvitationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        title: string;
        slug: string;
        type: $Enums.EventType;
        status: $Enums.EventStatus;
        startsAt: Date;
        endsAt: Date | null;
        timezone: string;
        venue: string | null;
        description: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["event"]>;
    composites: {};
};
export type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventPayload, S>;
export type EventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventCountAggregateInputType | true;
};
export interface EventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Event'];
        meta: {
            name: 'Event';
        };
    };
    findUnique<T extends EventFindUniqueArgs>(args: Prisma.SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EventFindFirstArgs>(args?: Prisma.SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EventFindManyArgs>(args?: Prisma.SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EventCreateArgs>(args: Prisma.SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EventCreateManyArgs>(args?: Prisma.SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EventDeleteArgs>(args: Prisma.SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EventUpdateArgs>(args: Prisma.SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EventDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EventUpdateManyArgs>(args: Prisma.SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EventUpsertArgs>(args: Prisma.SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EventCountArgs>(args?: Prisma.Subset<T, EventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventCountAggregateOutputType> : number>;
    aggregate<T extends EventAggregateArgs>(args: Prisma.Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>;
    groupBy<T extends EventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventGroupByArgs['orderBy'];
    } : {
        orderBy?: EventGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EventFieldRefs;
}
export interface Prisma__EventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    guestGroups<T extends Prisma.Event$guestGroupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$guestGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invitations<T extends Prisma.Event$invitationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EventFieldRefs {
    readonly id: Prisma.FieldRef<"Event", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Event", 'String'>;
    readonly title: Prisma.FieldRef<"Event", 'String'>;
    readonly slug: Prisma.FieldRef<"Event", 'String'>;
    readonly type: Prisma.FieldRef<"Event", 'EventType'>;
    readonly status: Prisma.FieldRef<"Event", 'EventStatus'>;
    readonly startsAt: Prisma.FieldRef<"Event", 'DateTime'>;
    readonly endsAt: Prisma.FieldRef<"Event", 'DateTime'>;
    readonly timezone: Prisma.FieldRef<"Event", 'String'>;
    readonly venue: Prisma.FieldRef<"Event", 'String'>;
    readonly description: Prisma.FieldRef<"Event", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Event", 'DateTime'>;
}
export type EventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
};
export type EventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
};
export type EventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type EventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type EventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type EventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventCreateInput, Prisma.EventUncheckedCreateInput>;
};
export type EventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EventCreateManyInput | Prisma.EventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    data: Prisma.EventCreateManyInput | Prisma.EventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventUpdateInput, Prisma.EventUncheckedUpdateInput>;
    where: Prisma.EventWhereUniqueInput;
};
export type EventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyInput>;
    where?: Prisma.EventWhereInput;
    limit?: number;
};
export type EventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyInput>;
    where?: Prisma.EventWhereInput;
    limit?: number;
    include?: Prisma.EventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateInput, Prisma.EventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EventUpdateInput, Prisma.EventUncheckedUpdateInput>;
};
export type EventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
};
export type EventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    limit?: number;
};
export type Event$guestGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelect<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    include?: Prisma.GuestGroupInclude<ExtArgs> | null;
    where?: Prisma.GuestGroupWhereInput;
    orderBy?: Prisma.GuestGroupOrderByWithRelationInput | Prisma.GuestGroupOrderByWithRelationInput[];
    cursor?: Prisma.GuestGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestGroupScalarFieldEnum | Prisma.GuestGroupScalarFieldEnum[];
};
export type Event$invitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where?: Prisma.InvitationWhereInput;
    orderBy?: Prisma.InvitationOrderByWithRelationInput | Prisma.InvitationOrderByWithRelationInput[];
    cursor?: Prisma.InvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvitationScalarFieldEnum | Prisma.InvitationScalarFieldEnum[];
};
export type EventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
};
