import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvitationModel = runtime.Types.Result.DefaultSelection<Prisma.$InvitationPayload>;
export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null;
    _avg: InvitationAvgAggregateOutputType | null;
    _sum: InvitationSumAggregateOutputType | null;
    _min: InvitationMinAggregateOutputType | null;
    _max: InvitationMaxAggregateOutputType | null;
};
export type InvitationAvgAggregateOutputType = {
    maxPax: number | null;
};
export type InvitationSumAggregateOutputType = {
    maxPax: number | null;
};
export type InvitationMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    eventId: string | null;
    guestId: string | null;
    groupId: string | null;
    token: string | null;
    maxPax: number | null;
    status: $Enums.InvitationStatus | null;
    sentAt: Date | null;
    openedAt: Date | null;
    createdAt: Date | null;
};
export type InvitationMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    eventId: string | null;
    guestId: string | null;
    groupId: string | null;
    token: string | null;
    maxPax: number | null;
    status: $Enums.InvitationStatus | null;
    sentAt: Date | null;
    openedAt: Date | null;
    createdAt: Date | null;
};
export type InvitationCountAggregateOutputType = {
    id: number;
    organizationId: number;
    eventId: number;
    guestId: number;
    groupId: number;
    token: number;
    maxPax: number;
    status: number;
    sentAt: number;
    openedAt: number;
    createdAt: number;
    _all: number;
};
export type InvitationAvgAggregateInputType = {
    maxPax?: true;
};
export type InvitationSumAggregateInputType = {
    maxPax?: true;
};
export type InvitationMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    eventId?: true;
    guestId?: true;
    groupId?: true;
    token?: true;
    maxPax?: true;
    status?: true;
    sentAt?: true;
    openedAt?: true;
    createdAt?: true;
};
export type InvitationMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    eventId?: true;
    guestId?: true;
    groupId?: true;
    token?: true;
    maxPax?: true;
    status?: true;
    sentAt?: true;
    openedAt?: true;
    createdAt?: true;
};
export type InvitationCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    eventId?: true;
    guestId?: true;
    groupId?: true;
    token?: true;
    maxPax?: true;
    status?: true;
    sentAt?: true;
    openedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type InvitationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationWhereInput;
    orderBy?: Prisma.InvitationOrderByWithRelationInput | Prisma.InvitationOrderByWithRelationInput[];
    cursor?: Prisma.InvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvitationCountAggregateInputType;
    _avg?: InvitationAvgAggregateInputType;
    _sum?: InvitationSumAggregateInputType;
    _min?: InvitationMinAggregateInputType;
    _max?: InvitationMaxAggregateInputType;
};
export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
    [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvitation[P]> : Prisma.GetScalarType<T[P], AggregateInvitation[P]>;
};
export type InvitationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationWhereInput;
    orderBy?: Prisma.InvitationOrderByWithAggregationInput | Prisma.InvitationOrderByWithAggregationInput[];
    by: Prisma.InvitationScalarFieldEnum[] | Prisma.InvitationScalarFieldEnum;
    having?: Prisma.InvitationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvitationCountAggregateInputType | true;
    _avg?: InvitationAvgAggregateInputType;
    _sum?: InvitationSumAggregateInputType;
    _min?: InvitationMinAggregateInputType;
    _max?: InvitationMaxAggregateInputType;
};
export type InvitationGroupByOutputType = {
    id: string;
    organizationId: string;
    eventId: string;
    guestId: string;
    groupId: string | null;
    token: string;
    maxPax: number;
    status: $Enums.InvitationStatus;
    sentAt: Date | null;
    openedAt: Date | null;
    createdAt: Date;
    _count: InvitationCountAggregateOutputType | null;
    _avg: InvitationAvgAggregateOutputType | null;
    _sum: InvitationSumAggregateOutputType | null;
    _min: InvitationMinAggregateOutputType | null;
    _max: InvitationMaxAggregateOutputType | null;
};
export type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvitationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvitationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvitationGroupByOutputType[P]>;
}>>;
export type InvitationWhereInput = {
    AND?: Prisma.InvitationWhereInput | Prisma.InvitationWhereInput[];
    OR?: Prisma.InvitationWhereInput[];
    NOT?: Prisma.InvitationWhereInput | Prisma.InvitationWhereInput[];
    id?: Prisma.StringFilter<"Invitation"> | string;
    organizationId?: Prisma.StringFilter<"Invitation"> | string;
    eventId?: Prisma.StringFilter<"Invitation"> | string;
    guestId?: Prisma.StringFilter<"Invitation"> | string;
    groupId?: Prisma.StringNullableFilter<"Invitation"> | string | null;
    token?: Prisma.StringFilter<"Invitation"> | string;
    maxPax?: Prisma.IntFilter<"Invitation"> | number;
    status?: Prisma.EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus;
    sentAt?: Prisma.DateTimeNullableFilter<"Invitation"> | Date | string | null;
    openedAt?: Prisma.DateTimeNullableFilter<"Invitation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invitation"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    guest?: Prisma.XOR<Prisma.GuestScalarRelationFilter, Prisma.GuestWhereInput>;
    group?: Prisma.XOR<Prisma.GuestGroupNullableScalarRelationFilter, Prisma.GuestGroupWhereInput> | null;
    rsvp?: Prisma.XOR<Prisma.RsvpNullableScalarRelationFilter, Prisma.RsvpWhereInput> | null;
    checkIns?: Prisma.CheckInListRelationFilter;
};
export type InvitationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrderInput | Prisma.SortOrder;
    token?: Prisma.SortOrder;
    maxPax?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    openedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    guest?: Prisma.GuestOrderByWithRelationInput;
    group?: Prisma.GuestGroupOrderByWithRelationInput;
    rsvp?: Prisma.RsvpOrderByWithRelationInput;
    checkIns?: Prisma.CheckInOrderByRelationAggregateInput;
};
export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    eventId_guestId?: Prisma.InvitationEventIdGuestIdCompoundUniqueInput;
    AND?: Prisma.InvitationWhereInput | Prisma.InvitationWhereInput[];
    OR?: Prisma.InvitationWhereInput[];
    NOT?: Prisma.InvitationWhereInput | Prisma.InvitationWhereInput[];
    organizationId?: Prisma.StringFilter<"Invitation"> | string;
    eventId?: Prisma.StringFilter<"Invitation"> | string;
    guestId?: Prisma.StringFilter<"Invitation"> | string;
    groupId?: Prisma.StringNullableFilter<"Invitation"> | string | null;
    maxPax?: Prisma.IntFilter<"Invitation"> | number;
    status?: Prisma.EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus;
    sentAt?: Prisma.DateTimeNullableFilter<"Invitation"> | Date | string | null;
    openedAt?: Prisma.DateTimeNullableFilter<"Invitation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invitation"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    guest?: Prisma.XOR<Prisma.GuestScalarRelationFilter, Prisma.GuestWhereInput>;
    group?: Prisma.XOR<Prisma.GuestGroupNullableScalarRelationFilter, Prisma.GuestGroupWhereInput> | null;
    rsvp?: Prisma.XOR<Prisma.RsvpNullableScalarRelationFilter, Prisma.RsvpWhereInput> | null;
    checkIns?: Prisma.CheckInListRelationFilter;
}, "id" | "token" | "eventId_guestId">;
export type InvitationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrderInput | Prisma.SortOrder;
    token?: Prisma.SortOrder;
    maxPax?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    openedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvitationCountOrderByAggregateInput;
    _avg?: Prisma.InvitationAvgOrderByAggregateInput;
    _max?: Prisma.InvitationMaxOrderByAggregateInput;
    _min?: Prisma.InvitationMinOrderByAggregateInput;
    _sum?: Prisma.InvitationSumOrderByAggregateInput;
};
export type InvitationScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvitationScalarWhereWithAggregatesInput | Prisma.InvitationScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvitationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvitationScalarWhereWithAggregatesInput | Prisma.InvitationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Invitation"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"Invitation"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"Invitation"> | string;
    guestId?: Prisma.StringWithAggregatesFilter<"Invitation"> | string;
    groupId?: Prisma.StringNullableWithAggregatesFilter<"Invitation"> | string | null;
    token?: Prisma.StringWithAggregatesFilter<"Invitation"> | string;
    maxPax?: Prisma.IntWithAggregatesFilter<"Invitation"> | number;
    status?: Prisma.EnumInvitationStatusWithAggregatesFilter<"Invitation"> | $Enums.InvitationStatus;
    sentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Invitation"> | Date | string | null;
    openedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Invitation"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Invitation"> | Date | string;
};
export type InvitationCreateInput = {
    id?: string;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvitationsInput;
    event: Prisma.EventCreateNestedOneWithoutInvitationsInput;
    guest: Prisma.GuestCreateNestedOneWithoutInvitationsInput;
    group?: Prisma.GuestGroupCreateNestedOneWithoutInvitationsInput;
    rsvp?: Prisma.RsvpCreateNestedOneWithoutInvitationInput;
    checkIns?: Prisma.CheckInCreateNestedManyWithoutInvitationInput;
};
export type InvitationUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    guestId: string;
    groupId?: string | null;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    rsvp?: Prisma.RsvpUncheckedCreateNestedOneWithoutInvitationInput;
    checkIns?: Prisma.CheckInUncheckedCreateNestedManyWithoutInvitationInput;
};
export type InvitationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvitationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutInvitationsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutInvitationsNestedInput;
    group?: Prisma.GuestGroupUpdateOneWithoutInvitationsNestedInput;
    rsvp?: Prisma.RsvpUpdateOneWithoutInvitationNestedInput;
    checkIns?: Prisma.CheckInUpdateManyWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUncheckedUpdateOneWithoutInvitationNestedInput;
    checkIns?: Prisma.CheckInUncheckedUpdateManyWithoutInvitationNestedInput;
};
export type InvitationCreateManyInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    guestId: string;
    groupId?: string | null;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type InvitationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationListRelationFilter = {
    every?: Prisma.InvitationWhereInput;
    some?: Prisma.InvitationWhereInput;
    none?: Prisma.InvitationWhereInput;
};
export type InvitationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvitationEventIdGuestIdCompoundUniqueInput = {
    eventId: string;
    guestId: string;
};
export type InvitationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    maxPax?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationAvgOrderByAggregateInput = {
    maxPax?: Prisma.SortOrder;
};
export type InvitationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    maxPax?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    guestId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    maxPax?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    openedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvitationSumOrderByAggregateInput = {
    maxPax?: Prisma.SortOrder;
};
export type InvitationScalarRelationFilter = {
    is?: Prisma.InvitationWhereInput;
    isNot?: Prisma.InvitationWhereInput;
};
export type InvitationCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutOrganizationInput, Prisma.InvitationUncheckedCreateWithoutOrganizationInput> | Prisma.InvitationCreateWithoutOrganizationInput[] | Prisma.InvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutOrganizationInput | Prisma.InvitationCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.InvitationCreateManyOrganizationInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutOrganizationInput, Prisma.InvitationUncheckedCreateWithoutOrganizationInput> | Prisma.InvitationCreateWithoutOrganizationInput[] | Prisma.InvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutOrganizationInput | Prisma.InvitationCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.InvitationCreateManyOrganizationInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutOrganizationInput, Prisma.InvitationUncheckedCreateWithoutOrganizationInput> | Prisma.InvitationCreateWithoutOrganizationInput[] | Prisma.InvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutOrganizationInput | Prisma.InvitationCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.InvitationUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.InvitationCreateManyOrganizationInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.InvitationUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutOrganizationInput | Prisma.InvitationUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type InvitationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutOrganizationInput, Prisma.InvitationUncheckedCreateWithoutOrganizationInput> | Prisma.InvitationCreateWithoutOrganizationInput[] | Prisma.InvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutOrganizationInput | Prisma.InvitationCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.InvitationUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.InvitationCreateManyOrganizationInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.InvitationUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutOrganizationInput | Prisma.InvitationUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type InvitationCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutEventInput, Prisma.InvitationUncheckedCreateWithoutEventInput> | Prisma.InvitationCreateWithoutEventInput[] | Prisma.InvitationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutEventInput | Prisma.InvitationCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.InvitationCreateManyEventInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutEventInput, Prisma.InvitationUncheckedCreateWithoutEventInput> | Prisma.InvitationCreateWithoutEventInput[] | Prisma.InvitationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutEventInput | Prisma.InvitationCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.InvitationCreateManyEventInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutEventInput, Prisma.InvitationUncheckedCreateWithoutEventInput> | Prisma.InvitationCreateWithoutEventInput[] | Prisma.InvitationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutEventInput | Prisma.InvitationCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutEventInput | Prisma.InvitationUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.InvitationCreateManyEventInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutEventInput | Prisma.InvitationUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutEventInput | Prisma.InvitationUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type InvitationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutEventInput, Prisma.InvitationUncheckedCreateWithoutEventInput> | Prisma.InvitationCreateWithoutEventInput[] | Prisma.InvitationUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutEventInput | Prisma.InvitationCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutEventInput | Prisma.InvitationUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.InvitationCreateManyEventInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutEventInput | Prisma.InvitationUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutEventInput | Prisma.InvitationUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type InvitationCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGuestInput, Prisma.InvitationUncheckedCreateWithoutGuestInput> | Prisma.InvitationCreateWithoutGuestInput[] | Prisma.InvitationUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGuestInput | Prisma.InvitationCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.InvitationCreateManyGuestInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUncheckedCreateNestedManyWithoutGuestInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGuestInput, Prisma.InvitationUncheckedCreateWithoutGuestInput> | Prisma.InvitationCreateWithoutGuestInput[] | Prisma.InvitationUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGuestInput | Prisma.InvitationCreateOrConnectWithoutGuestInput[];
    createMany?: Prisma.InvitationCreateManyGuestInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGuestInput, Prisma.InvitationUncheckedCreateWithoutGuestInput> | Prisma.InvitationCreateWithoutGuestInput[] | Prisma.InvitationUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGuestInput | Prisma.InvitationCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutGuestInput | Prisma.InvitationUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.InvitationCreateManyGuestInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutGuestInput | Prisma.InvitationUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutGuestInput | Prisma.InvitationUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type InvitationUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGuestInput, Prisma.InvitationUncheckedCreateWithoutGuestInput> | Prisma.InvitationCreateWithoutGuestInput[] | Prisma.InvitationUncheckedCreateWithoutGuestInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGuestInput | Prisma.InvitationCreateOrConnectWithoutGuestInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutGuestInput | Prisma.InvitationUpsertWithWhereUniqueWithoutGuestInput[];
    createMany?: Prisma.InvitationCreateManyGuestInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutGuestInput | Prisma.InvitationUpdateWithWhereUniqueWithoutGuestInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutGuestInput | Prisma.InvitationUpdateManyWithWhereWithoutGuestInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type InvitationCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput> | Prisma.InvitationCreateWithoutGroupInput[] | Prisma.InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGroupInput | Prisma.InvitationCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.InvitationCreateManyGroupInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput> | Prisma.InvitationCreateWithoutGroupInput[] | Prisma.InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGroupInput | Prisma.InvitationCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.InvitationCreateManyGroupInputEnvelope;
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
};
export type InvitationUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput> | Prisma.InvitationCreateWithoutGroupInput[] | Prisma.InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGroupInput | Prisma.InvitationCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutGroupInput | Prisma.InvitationUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.InvitationCreateManyGroupInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutGroupInput | Prisma.InvitationUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutGroupInput | Prisma.InvitationUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type InvitationUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput> | Prisma.InvitationCreateWithoutGroupInput[] | Prisma.InvitationUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutGroupInput | Prisma.InvitationCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.InvitationUpsertWithWhereUniqueWithoutGroupInput | Prisma.InvitationUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.InvitationCreateManyGroupInputEnvelope;
    set?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    disconnect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    delete?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    connect?: Prisma.InvitationWhereUniqueInput | Prisma.InvitationWhereUniqueInput[];
    update?: Prisma.InvitationUpdateWithWhereUniqueWithoutGroupInput | Prisma.InvitationUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.InvitationUpdateManyWithWhereWithoutGroupInput | Prisma.InvitationUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumInvitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvitationStatus;
};
export type InvitationCreateNestedOneWithoutRsvpInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutRsvpInput, Prisma.InvitationUncheckedCreateWithoutRsvpInput>;
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutRsvpInput;
    connect?: Prisma.InvitationWhereUniqueInput;
};
export type InvitationUpdateOneRequiredWithoutRsvpNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutRsvpInput, Prisma.InvitationUncheckedCreateWithoutRsvpInput>;
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutRsvpInput;
    upsert?: Prisma.InvitationUpsertWithoutRsvpInput;
    connect?: Prisma.InvitationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvitationUpdateToOneWithWhereWithoutRsvpInput, Prisma.InvitationUpdateWithoutRsvpInput>, Prisma.InvitationUncheckedUpdateWithoutRsvpInput>;
};
export type InvitationCreateNestedOneWithoutCheckInsInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutCheckInsInput, Prisma.InvitationUncheckedCreateWithoutCheckInsInput>;
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutCheckInsInput;
    connect?: Prisma.InvitationWhereUniqueInput;
};
export type InvitationUpdateOneRequiredWithoutCheckInsNestedInput = {
    create?: Prisma.XOR<Prisma.InvitationCreateWithoutCheckInsInput, Prisma.InvitationUncheckedCreateWithoutCheckInsInput>;
    connectOrCreate?: Prisma.InvitationCreateOrConnectWithoutCheckInsInput;
    upsert?: Prisma.InvitationUpsertWithoutCheckInsInput;
    connect?: Prisma.InvitationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvitationUpdateToOneWithWhereWithoutCheckInsInput, Prisma.InvitationUpdateWithoutCheckInsInput>, Prisma.InvitationUncheckedUpdateWithoutCheckInsInput>;
};
export type InvitationCreateWithoutOrganizationInput = {
    id?: string;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutInvitationsInput;
    guest: Prisma.GuestCreateNestedOneWithoutInvitationsInput;
    group?: Prisma.GuestGroupCreateNestedOneWithoutInvitationsInput;
    rsvp?: Prisma.RsvpCreateNestedOneWithoutInvitationInput;
    checkIns?: Prisma.CheckInCreateNestedManyWithoutInvitationInput;
};
export type InvitationUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    eventId: string;
    guestId: string;
    groupId?: string | null;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    rsvp?: Prisma.RsvpUncheckedCreateNestedOneWithoutInvitationInput;
    checkIns?: Prisma.CheckInUncheckedCreateNestedManyWithoutInvitationInput;
};
export type InvitationCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.InvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutOrganizationInput, Prisma.InvitationUncheckedCreateWithoutOrganizationInput>;
};
export type InvitationCreateManyOrganizationInputEnvelope = {
    data: Prisma.InvitationCreateManyOrganizationInput | Prisma.InvitationCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type InvitationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.InvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationUpdateWithoutOrganizationInput, Prisma.InvitationUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutOrganizationInput, Prisma.InvitationUncheckedCreateWithoutOrganizationInput>;
};
export type InvitationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.InvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationUpdateWithoutOrganizationInput, Prisma.InvitationUncheckedUpdateWithoutOrganizationInput>;
};
export type InvitationUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.InvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationUpdateManyMutationInput, Prisma.InvitationUncheckedUpdateManyWithoutOrganizationInput>;
};
export type InvitationScalarWhereInput = {
    AND?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
    OR?: Prisma.InvitationScalarWhereInput[];
    NOT?: Prisma.InvitationScalarWhereInput | Prisma.InvitationScalarWhereInput[];
    id?: Prisma.StringFilter<"Invitation"> | string;
    organizationId?: Prisma.StringFilter<"Invitation"> | string;
    eventId?: Prisma.StringFilter<"Invitation"> | string;
    guestId?: Prisma.StringFilter<"Invitation"> | string;
    groupId?: Prisma.StringNullableFilter<"Invitation"> | string | null;
    token?: Prisma.StringFilter<"Invitation"> | string;
    maxPax?: Prisma.IntFilter<"Invitation"> | number;
    status?: Prisma.EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus;
    sentAt?: Prisma.DateTimeNullableFilter<"Invitation"> | Date | string | null;
    openedAt?: Prisma.DateTimeNullableFilter<"Invitation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Invitation"> | Date | string;
};
export type InvitationCreateWithoutEventInput = {
    id?: string;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvitationsInput;
    guest: Prisma.GuestCreateNestedOneWithoutInvitationsInput;
    group?: Prisma.GuestGroupCreateNestedOneWithoutInvitationsInput;
    rsvp?: Prisma.RsvpCreateNestedOneWithoutInvitationInput;
    checkIns?: Prisma.CheckInCreateNestedManyWithoutInvitationInput;
};
export type InvitationUncheckedCreateWithoutEventInput = {
    id?: string;
    organizationId: string;
    guestId: string;
    groupId?: string | null;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    rsvp?: Prisma.RsvpUncheckedCreateNestedOneWithoutInvitationInput;
    checkIns?: Prisma.CheckInUncheckedCreateNestedManyWithoutInvitationInput;
};
export type InvitationCreateOrConnectWithoutEventInput = {
    where: Prisma.InvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutEventInput, Prisma.InvitationUncheckedCreateWithoutEventInput>;
};
export type InvitationCreateManyEventInputEnvelope = {
    data: Prisma.InvitationCreateManyEventInput | Prisma.InvitationCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type InvitationUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.InvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationUpdateWithoutEventInput, Prisma.InvitationUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutEventInput, Prisma.InvitationUncheckedCreateWithoutEventInput>;
};
export type InvitationUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.InvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationUpdateWithoutEventInput, Prisma.InvitationUncheckedUpdateWithoutEventInput>;
};
export type InvitationUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.InvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationUpdateManyMutationInput, Prisma.InvitationUncheckedUpdateManyWithoutEventInput>;
};
export type InvitationCreateWithoutGuestInput = {
    id?: string;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvitationsInput;
    event: Prisma.EventCreateNestedOneWithoutInvitationsInput;
    group?: Prisma.GuestGroupCreateNestedOneWithoutInvitationsInput;
    rsvp?: Prisma.RsvpCreateNestedOneWithoutInvitationInput;
    checkIns?: Prisma.CheckInCreateNestedManyWithoutInvitationInput;
};
export type InvitationUncheckedCreateWithoutGuestInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    groupId?: string | null;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    rsvp?: Prisma.RsvpUncheckedCreateNestedOneWithoutInvitationInput;
    checkIns?: Prisma.CheckInUncheckedCreateNestedManyWithoutInvitationInput;
};
export type InvitationCreateOrConnectWithoutGuestInput = {
    where: Prisma.InvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutGuestInput, Prisma.InvitationUncheckedCreateWithoutGuestInput>;
};
export type InvitationCreateManyGuestInputEnvelope = {
    data: Prisma.InvitationCreateManyGuestInput | Prisma.InvitationCreateManyGuestInput[];
    skipDuplicates?: boolean;
};
export type InvitationUpsertWithWhereUniqueWithoutGuestInput = {
    where: Prisma.InvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationUpdateWithoutGuestInput, Prisma.InvitationUncheckedUpdateWithoutGuestInput>;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutGuestInput, Prisma.InvitationUncheckedCreateWithoutGuestInput>;
};
export type InvitationUpdateWithWhereUniqueWithoutGuestInput = {
    where: Prisma.InvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationUpdateWithoutGuestInput, Prisma.InvitationUncheckedUpdateWithoutGuestInput>;
};
export type InvitationUpdateManyWithWhereWithoutGuestInput = {
    where: Prisma.InvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationUpdateManyMutationInput, Prisma.InvitationUncheckedUpdateManyWithoutGuestInput>;
};
export type InvitationCreateWithoutGroupInput = {
    id?: string;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvitationsInput;
    event: Prisma.EventCreateNestedOneWithoutInvitationsInput;
    guest: Prisma.GuestCreateNestedOneWithoutInvitationsInput;
    rsvp?: Prisma.RsvpCreateNestedOneWithoutInvitationInput;
    checkIns?: Prisma.CheckInCreateNestedManyWithoutInvitationInput;
};
export type InvitationUncheckedCreateWithoutGroupInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    guestId: string;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    rsvp?: Prisma.RsvpUncheckedCreateNestedOneWithoutInvitationInput;
    checkIns?: Prisma.CheckInUncheckedCreateNestedManyWithoutInvitationInput;
};
export type InvitationCreateOrConnectWithoutGroupInput = {
    where: Prisma.InvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput>;
};
export type InvitationCreateManyGroupInputEnvelope = {
    data: Prisma.InvitationCreateManyGroupInput | Prisma.InvitationCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type InvitationUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.InvitationWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvitationUpdateWithoutGroupInput, Prisma.InvitationUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutGroupInput, Prisma.InvitationUncheckedCreateWithoutGroupInput>;
};
export type InvitationUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.InvitationWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvitationUpdateWithoutGroupInput, Prisma.InvitationUncheckedUpdateWithoutGroupInput>;
};
export type InvitationUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.InvitationScalarWhereInput;
    data: Prisma.XOR<Prisma.InvitationUpdateManyMutationInput, Prisma.InvitationUncheckedUpdateManyWithoutGroupInput>;
};
export type InvitationCreateWithoutRsvpInput = {
    id?: string;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvitationsInput;
    event: Prisma.EventCreateNestedOneWithoutInvitationsInput;
    guest: Prisma.GuestCreateNestedOneWithoutInvitationsInput;
    group?: Prisma.GuestGroupCreateNestedOneWithoutInvitationsInput;
    checkIns?: Prisma.CheckInCreateNestedManyWithoutInvitationInput;
};
export type InvitationUncheckedCreateWithoutRsvpInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    guestId: string;
    groupId?: string | null;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    checkIns?: Prisma.CheckInUncheckedCreateNestedManyWithoutInvitationInput;
};
export type InvitationCreateOrConnectWithoutRsvpInput = {
    where: Prisma.InvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutRsvpInput, Prisma.InvitationUncheckedCreateWithoutRsvpInput>;
};
export type InvitationUpsertWithoutRsvpInput = {
    update: Prisma.XOR<Prisma.InvitationUpdateWithoutRsvpInput, Prisma.InvitationUncheckedUpdateWithoutRsvpInput>;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutRsvpInput, Prisma.InvitationUncheckedCreateWithoutRsvpInput>;
    where?: Prisma.InvitationWhereInput;
};
export type InvitationUpdateToOneWithWhereWithoutRsvpInput = {
    where?: Prisma.InvitationWhereInput;
    data: Prisma.XOR<Prisma.InvitationUpdateWithoutRsvpInput, Prisma.InvitationUncheckedUpdateWithoutRsvpInput>;
};
export type InvitationUpdateWithoutRsvpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvitationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutInvitationsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutInvitationsNestedInput;
    group?: Prisma.GuestGroupUpdateOneWithoutInvitationsNestedInput;
    checkIns?: Prisma.CheckInUpdateManyWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateWithoutRsvpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checkIns?: Prisma.CheckInUncheckedUpdateManyWithoutInvitationNestedInput;
};
export type InvitationCreateWithoutCheckInsInput = {
    id?: string;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvitationsInput;
    event: Prisma.EventCreateNestedOneWithoutInvitationsInput;
    guest: Prisma.GuestCreateNestedOneWithoutInvitationsInput;
    group?: Prisma.GuestGroupCreateNestedOneWithoutInvitationsInput;
    rsvp?: Prisma.RsvpCreateNestedOneWithoutInvitationInput;
};
export type InvitationUncheckedCreateWithoutCheckInsInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    guestId: string;
    groupId?: string | null;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
    rsvp?: Prisma.RsvpUncheckedCreateNestedOneWithoutInvitationInput;
};
export type InvitationCreateOrConnectWithoutCheckInsInput = {
    where: Prisma.InvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutCheckInsInput, Prisma.InvitationUncheckedCreateWithoutCheckInsInput>;
};
export type InvitationUpsertWithoutCheckInsInput = {
    update: Prisma.XOR<Prisma.InvitationUpdateWithoutCheckInsInput, Prisma.InvitationUncheckedUpdateWithoutCheckInsInput>;
    create: Prisma.XOR<Prisma.InvitationCreateWithoutCheckInsInput, Prisma.InvitationUncheckedCreateWithoutCheckInsInput>;
    where?: Prisma.InvitationWhereInput;
};
export type InvitationUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: Prisma.InvitationWhereInput;
    data: Prisma.XOR<Prisma.InvitationUpdateWithoutCheckInsInput, Prisma.InvitationUncheckedUpdateWithoutCheckInsInput>;
};
export type InvitationUpdateWithoutCheckInsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvitationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutInvitationsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutInvitationsNestedInput;
    group?: Prisma.GuestGroupUpdateOneWithoutInvitationsNestedInput;
    rsvp?: Prisma.RsvpUpdateOneWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateWithoutCheckInsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUncheckedUpdateOneWithoutInvitationNestedInput;
};
export type InvitationCreateManyOrganizationInput = {
    id?: string;
    eventId: string;
    guestId: string;
    groupId?: string | null;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type InvitationUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutInvitationsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutInvitationsNestedInput;
    group?: Prisma.GuestGroupUpdateOneWithoutInvitationsNestedInput;
    rsvp?: Prisma.RsvpUpdateOneWithoutInvitationNestedInput;
    checkIns?: Prisma.CheckInUpdateManyWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUncheckedUpdateOneWithoutInvitationNestedInput;
    checkIns?: Prisma.CheckInUncheckedUpdateManyWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationCreateManyEventInput = {
    id?: string;
    organizationId: string;
    guestId: string;
    groupId?: string | null;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type InvitationUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvitationsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutInvitationsNestedInput;
    group?: Prisma.GuestGroupUpdateOneWithoutInvitationsNestedInput;
    rsvp?: Prisma.RsvpUpdateOneWithoutInvitationNestedInput;
    checkIns?: Prisma.CheckInUpdateManyWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUncheckedUpdateOneWithoutInvitationNestedInput;
    checkIns?: Prisma.CheckInUncheckedUpdateManyWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationCreateManyGuestInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    groupId?: string | null;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type InvitationUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvitationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutInvitationsNestedInput;
    group?: Prisma.GuestGroupUpdateOneWithoutInvitationsNestedInput;
    rsvp?: Prisma.RsvpUpdateOneWithoutInvitationNestedInput;
    checkIns?: Prisma.CheckInUpdateManyWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUncheckedUpdateOneWithoutInvitationNestedInput;
    checkIns?: Prisma.CheckInUncheckedUpdateManyWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateManyWithoutGuestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationCreateManyGroupInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    guestId: string;
    token: string;
    maxPax?: number;
    status?: $Enums.InvitationStatus;
    sentAt?: Date | string | null;
    openedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type InvitationUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvitationsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutInvitationsNestedInput;
    guest?: Prisma.GuestUpdateOneRequiredWithoutInvitationsNestedInput;
    rsvp?: Prisma.RsvpUpdateOneWithoutInvitationNestedInput;
    checkIns?: Prisma.CheckInUpdateManyWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUncheckedUpdateOneWithoutInvitationNestedInput;
    checkIns?: Prisma.CheckInUncheckedUpdateManyWithoutInvitationNestedInput;
};
export type InvitationUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestId?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    openedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvitationCountOutputType = {
    checkIns: number;
};
export type InvitationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checkIns?: boolean | InvitationCountOutputTypeCountCheckInsArgs;
};
export type InvitationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationCountOutputTypeSelect<ExtArgs> | null;
};
export type InvitationCountOutputTypeCountCheckInsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckInWhereInput;
};
export type InvitationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    guestId?: boolean;
    groupId?: boolean;
    token?: boolean;
    maxPax?: boolean;
    status?: boolean;
    sentAt?: boolean;
    openedAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    group?: boolean | Prisma.Invitation$groupArgs<ExtArgs>;
    rsvp?: boolean | Prisma.Invitation$rsvpArgs<ExtArgs>;
    checkIns?: boolean | Prisma.Invitation$checkInsArgs<ExtArgs>;
    _count?: boolean | Prisma.InvitationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invitation"]>;
export type InvitationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    guestId?: boolean;
    groupId?: boolean;
    token?: boolean;
    maxPax?: boolean;
    status?: boolean;
    sentAt?: boolean;
    openedAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    group?: boolean | Prisma.Invitation$groupArgs<ExtArgs>;
}, ExtArgs["result"]["invitation"]>;
export type InvitationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    guestId?: boolean;
    groupId?: boolean;
    token?: boolean;
    maxPax?: boolean;
    status?: boolean;
    sentAt?: boolean;
    openedAt?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    group?: boolean | Prisma.Invitation$groupArgs<ExtArgs>;
}, ExtArgs["result"]["invitation"]>;
export type InvitationSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    guestId?: boolean;
    groupId?: boolean;
    token?: boolean;
    maxPax?: boolean;
    status?: boolean;
    sentAt?: boolean;
    openedAt?: boolean;
    createdAt?: boolean;
};
export type InvitationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "eventId" | "guestId" | "groupId" | "token" | "maxPax" | "status" | "sentAt" | "openedAt" | "createdAt", ExtArgs["result"]["invitation"]>;
export type InvitationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    group?: boolean | Prisma.Invitation$groupArgs<ExtArgs>;
    rsvp?: boolean | Prisma.Invitation$rsvpArgs<ExtArgs>;
    checkIns?: boolean | Prisma.Invitation$checkInsArgs<ExtArgs>;
    _count?: boolean | Prisma.InvitationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InvitationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    group?: boolean | Prisma.Invitation$groupArgs<ExtArgs>;
};
export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    guest?: boolean | Prisma.GuestDefaultArgs<ExtArgs>;
    group?: boolean | Prisma.Invitation$groupArgs<ExtArgs>;
};
export type $InvitationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invitation";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs>;
        guest: Prisma.$GuestPayload<ExtArgs>;
        group: Prisma.$GuestGroupPayload<ExtArgs> | null;
        rsvp: Prisma.$RsvpPayload<ExtArgs> | null;
        checkIns: Prisma.$CheckInPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        eventId: string;
        guestId: string;
        groupId: string | null;
        token: string;
        maxPax: number;
        status: $Enums.InvitationStatus;
        sentAt: Date | null;
        openedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["invitation"]>;
    composites: {};
};
export type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvitationPayload, S>;
export type InvitationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvitationCountAggregateInputType | true;
};
export interface InvitationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invitation'];
        meta: {
            name: 'Invitation';
        };
    };
    findUnique<T extends InvitationFindUniqueArgs>(args: Prisma.SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvitationFindFirstArgs>(args?: Prisma.SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvitationFindManyArgs>(args?: Prisma.SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvitationCreateArgs>(args: Prisma.SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvitationCreateManyArgs>(args?: Prisma.SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvitationDeleteArgs>(args: Prisma.SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvitationUpdateArgs>(args: Prisma.SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvitationDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvitationUpdateManyArgs>(args: Prisma.SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvitationUpsertArgs>(args: Prisma.SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvitationCountArgs>(args?: Prisma.Subset<T, InvitationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvitationCountAggregateOutputType> : number>;
    aggregate<T extends InvitationAggregateArgs>(args: Prisma.Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>;
    groupBy<T extends InvitationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvitationGroupByArgs['orderBy'];
    } : {
        orderBy?: InvitationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvitationFieldRefs;
}
export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    guest<T extends Prisma.GuestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GuestDefaultArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    group<T extends Prisma.Invitation$groupArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invitation$groupArgs<ExtArgs>>): Prisma.Prisma__GuestGroupClient<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rsvp<T extends Prisma.Invitation$rsvpArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invitation$rsvpArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    checkIns<T extends Prisma.Invitation$checkInsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invitation$checkInsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvitationFieldRefs {
    readonly id: Prisma.FieldRef<"Invitation", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Invitation", 'String'>;
    readonly eventId: Prisma.FieldRef<"Invitation", 'String'>;
    readonly guestId: Prisma.FieldRef<"Invitation", 'String'>;
    readonly groupId: Prisma.FieldRef<"Invitation", 'String'>;
    readonly token: Prisma.FieldRef<"Invitation", 'String'>;
    readonly maxPax: Prisma.FieldRef<"Invitation", 'Int'>;
    readonly status: Prisma.FieldRef<"Invitation", 'InvitationStatus'>;
    readonly sentAt: Prisma.FieldRef<"Invitation", 'DateTime'>;
    readonly openedAt: Prisma.FieldRef<"Invitation", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Invitation", 'DateTime'>;
}
export type InvitationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where: Prisma.InvitationWhereUniqueInput;
};
export type InvitationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where: Prisma.InvitationWhereUniqueInput;
};
export type InvitationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvitationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvitationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvitationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationCreateInput, Prisma.InvitationUncheckedCreateInput>;
};
export type InvitationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvitationCreateManyInput | Prisma.InvitationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvitationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    data: Prisma.InvitationCreateManyInput | Prisma.InvitationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvitationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvitationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationUpdateInput, Prisma.InvitationUncheckedUpdateInput>;
    where: Prisma.InvitationWhereUniqueInput;
};
export type InvitationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvitationUpdateManyMutationInput, Prisma.InvitationUncheckedUpdateManyInput>;
    where?: Prisma.InvitationWhereInput;
    limit?: number;
};
export type InvitationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvitationUpdateManyMutationInput, Prisma.InvitationUncheckedUpdateManyInput>;
    where?: Prisma.InvitationWhereInput;
    limit?: number;
    include?: Prisma.InvitationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvitationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where: Prisma.InvitationWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvitationCreateInput, Prisma.InvitationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvitationUpdateInput, Prisma.InvitationUncheckedUpdateInput>;
};
export type InvitationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
    where: Prisma.InvitationWhereUniqueInput;
};
export type InvitationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationWhereInput;
    limit?: number;
};
export type Invitation$groupArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelect<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    include?: Prisma.GuestGroupInclude<ExtArgs> | null;
    where?: Prisma.GuestGroupWhereInput;
};
export type Invitation$rsvpArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where?: Prisma.RsvpWhereInput;
};
export type Invitation$checkInsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckInSelect<ExtArgs> | null;
    omit?: Prisma.CheckInOmit<ExtArgs> | null;
    include?: Prisma.CheckInInclude<ExtArgs> | null;
    where?: Prisma.CheckInWhereInput;
    orderBy?: Prisma.CheckInOrderByWithRelationInput | Prisma.CheckInOrderByWithRelationInput[];
    cursor?: Prisma.CheckInWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CheckInScalarFieldEnum | Prisma.CheckInScalarFieldEnum[];
};
export type InvitationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvitationSelect<ExtArgs> | null;
    omit?: Prisma.InvitationOmit<ExtArgs> | null;
    include?: Prisma.InvitationInclude<ExtArgs> | null;
};
