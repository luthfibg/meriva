import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GuestGroupModel = runtime.Types.Result.DefaultSelection<Prisma.$GuestGroupPayload>;
export type AggregateGuestGroup = {
    _count: GuestGroupCountAggregateOutputType | null;
    _min: GuestGroupMinAggregateOutputType | null;
    _max: GuestGroupMaxAggregateOutputType | null;
};
export type GuestGroupMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    eventId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type GuestGroupMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    eventId: string | null;
    name: string | null;
    createdAt: Date | null;
};
export type GuestGroupCountAggregateOutputType = {
    id: number;
    organizationId: number;
    eventId: number;
    name: number;
    createdAt: number;
    _all: number;
};
export type GuestGroupMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    eventId?: true;
    name?: true;
    createdAt?: true;
};
export type GuestGroupMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    eventId?: true;
    name?: true;
    createdAt?: true;
};
export type GuestGroupCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    eventId?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
};
export type GuestGroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestGroupWhereInput;
    orderBy?: Prisma.GuestGroupOrderByWithRelationInput | Prisma.GuestGroupOrderByWithRelationInput[];
    cursor?: Prisma.GuestGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GuestGroupCountAggregateInputType;
    _min?: GuestGroupMinAggregateInputType;
    _max?: GuestGroupMaxAggregateInputType;
};
export type GetGuestGroupAggregateType<T extends GuestGroupAggregateArgs> = {
    [P in keyof T & keyof AggregateGuestGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGuestGroup[P]> : Prisma.GetScalarType<T[P], AggregateGuestGroup[P]>;
};
export type GuestGroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestGroupWhereInput;
    orderBy?: Prisma.GuestGroupOrderByWithAggregationInput | Prisma.GuestGroupOrderByWithAggregationInput[];
    by: Prisma.GuestGroupScalarFieldEnum[] | Prisma.GuestGroupScalarFieldEnum;
    having?: Prisma.GuestGroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GuestGroupCountAggregateInputType | true;
    _min?: GuestGroupMinAggregateInputType;
    _max?: GuestGroupMaxAggregateInputType;
};
export type GuestGroupGroupByOutputType = {
    id: string;
    organizationId: string;
    eventId: string;
    name: string;
    createdAt: Date;
    _count: GuestGroupCountAggregateOutputType | null;
    _min: GuestGroupMinAggregateOutputType | null;
    _max: GuestGroupMaxAggregateOutputType | null;
};
export type GetGuestGroupGroupByPayload<T extends GuestGroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GuestGroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GuestGroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GuestGroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GuestGroupGroupByOutputType[P]>;
}>>;
export type GuestGroupWhereInput = {
    AND?: Prisma.GuestGroupWhereInput | Prisma.GuestGroupWhereInput[];
    OR?: Prisma.GuestGroupWhereInput[];
    NOT?: Prisma.GuestGroupWhereInput | Prisma.GuestGroupWhereInput[];
    id?: Prisma.StringFilter<"GuestGroup"> | string;
    organizationId?: Prisma.StringFilter<"GuestGroup"> | string;
    eventId?: Prisma.StringFilter<"GuestGroup"> | string;
    name?: Prisma.StringFilter<"GuestGroup"> | string;
    createdAt?: Prisma.DateTimeFilter<"GuestGroup"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    invitations?: Prisma.InvitationListRelationFilter;
};
export type GuestGroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    invitations?: Prisma.InvitationOrderByRelationAggregateInput;
};
export type GuestGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    eventId_name?: Prisma.GuestGroupEventIdNameCompoundUniqueInput;
    AND?: Prisma.GuestGroupWhereInput | Prisma.GuestGroupWhereInput[];
    OR?: Prisma.GuestGroupWhereInput[];
    NOT?: Prisma.GuestGroupWhereInput | Prisma.GuestGroupWhereInput[];
    organizationId?: Prisma.StringFilter<"GuestGroup"> | string;
    eventId?: Prisma.StringFilter<"GuestGroup"> | string;
    name?: Prisma.StringFilter<"GuestGroup"> | string;
    createdAt?: Prisma.DateTimeFilter<"GuestGroup"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    invitations?: Prisma.InvitationListRelationFilter;
}, "id" | "eventId_name">;
export type GuestGroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GuestGroupCountOrderByAggregateInput;
    _max?: Prisma.GuestGroupMaxOrderByAggregateInput;
    _min?: Prisma.GuestGroupMinOrderByAggregateInput;
};
export type GuestGroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.GuestGroupScalarWhereWithAggregatesInput | Prisma.GuestGroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.GuestGroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GuestGroupScalarWhereWithAggregatesInput | Prisma.GuestGroupScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GuestGroup"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"GuestGroup"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"GuestGroup"> | string;
    name?: Prisma.StringWithAggregatesFilter<"GuestGroup"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GuestGroup"> | Date | string;
};
export type GuestGroupCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGuestGroupsInput;
    event: Prisma.EventCreateNestedOneWithoutGuestGroupsInput;
    invitations?: Prisma.InvitationCreateNestedManyWithoutGroupInput;
};
export type GuestGroupUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    name: string;
    createdAt?: Date | string;
    invitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutGroupInput;
};
export type GuestGroupUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGuestGroupsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutGuestGroupsNestedInput;
    invitations?: Prisma.InvitationUpdateManyWithoutGroupNestedInput;
};
export type GuestGroupUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitations?: Prisma.InvitationUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GuestGroupCreateManyInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    name: string;
    createdAt?: Date | string;
};
export type GuestGroupUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGroupUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGroupListRelationFilter = {
    every?: Prisma.GuestGroupWhereInput;
    some?: Prisma.GuestGroupWhereInput;
    none?: Prisma.GuestGroupWhereInput;
};
export type GuestGroupOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GuestGroupEventIdNameCompoundUniqueInput = {
    eventId: string;
    name: string;
};
export type GuestGroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GuestGroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GuestGroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GuestGroupNullableScalarRelationFilter = {
    is?: Prisma.GuestGroupWhereInput | null;
    isNot?: Prisma.GuestGroupWhereInput | null;
};
export type GuestGroupCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.GuestGroupCreateWithoutOrganizationInput, Prisma.GuestGroupUncheckedCreateWithoutOrganizationInput> | Prisma.GuestGroupCreateWithoutOrganizationInput[] | Prisma.GuestGroupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GuestGroupCreateOrConnectWithoutOrganizationInput | Prisma.GuestGroupCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.GuestGroupCreateManyOrganizationInputEnvelope;
    connect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
};
export type GuestGroupUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.GuestGroupCreateWithoutOrganizationInput, Prisma.GuestGroupUncheckedCreateWithoutOrganizationInput> | Prisma.GuestGroupCreateWithoutOrganizationInput[] | Prisma.GuestGroupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GuestGroupCreateOrConnectWithoutOrganizationInput | Prisma.GuestGroupCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.GuestGroupCreateManyOrganizationInputEnvelope;
    connect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
};
export type GuestGroupUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.GuestGroupCreateWithoutOrganizationInput, Prisma.GuestGroupUncheckedCreateWithoutOrganizationInput> | Prisma.GuestGroupCreateWithoutOrganizationInput[] | Prisma.GuestGroupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GuestGroupCreateOrConnectWithoutOrganizationInput | Prisma.GuestGroupCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.GuestGroupUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.GuestGroupUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.GuestGroupCreateManyOrganizationInputEnvelope;
    set?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    disconnect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    delete?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    connect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    update?: Prisma.GuestGroupUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.GuestGroupUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.GuestGroupUpdateManyWithWhereWithoutOrganizationInput | Prisma.GuestGroupUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.GuestGroupScalarWhereInput | Prisma.GuestGroupScalarWhereInput[];
};
export type GuestGroupUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.GuestGroupCreateWithoutOrganizationInput, Prisma.GuestGroupUncheckedCreateWithoutOrganizationInput> | Prisma.GuestGroupCreateWithoutOrganizationInput[] | Prisma.GuestGroupUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GuestGroupCreateOrConnectWithoutOrganizationInput | Prisma.GuestGroupCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.GuestGroupUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.GuestGroupUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.GuestGroupCreateManyOrganizationInputEnvelope;
    set?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    disconnect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    delete?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    connect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    update?: Prisma.GuestGroupUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.GuestGroupUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.GuestGroupUpdateManyWithWhereWithoutOrganizationInput | Prisma.GuestGroupUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.GuestGroupScalarWhereInput | Prisma.GuestGroupScalarWhereInput[];
};
export type GuestGroupCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.GuestGroupCreateWithoutEventInput, Prisma.GuestGroupUncheckedCreateWithoutEventInput> | Prisma.GuestGroupCreateWithoutEventInput[] | Prisma.GuestGroupUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.GuestGroupCreateOrConnectWithoutEventInput | Prisma.GuestGroupCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.GuestGroupCreateManyEventInputEnvelope;
    connect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
};
export type GuestGroupUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.GuestGroupCreateWithoutEventInput, Prisma.GuestGroupUncheckedCreateWithoutEventInput> | Prisma.GuestGroupCreateWithoutEventInput[] | Prisma.GuestGroupUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.GuestGroupCreateOrConnectWithoutEventInput | Prisma.GuestGroupCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.GuestGroupCreateManyEventInputEnvelope;
    connect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
};
export type GuestGroupUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.GuestGroupCreateWithoutEventInput, Prisma.GuestGroupUncheckedCreateWithoutEventInput> | Prisma.GuestGroupCreateWithoutEventInput[] | Prisma.GuestGroupUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.GuestGroupCreateOrConnectWithoutEventInput | Prisma.GuestGroupCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.GuestGroupUpsertWithWhereUniqueWithoutEventInput | Prisma.GuestGroupUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.GuestGroupCreateManyEventInputEnvelope;
    set?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    disconnect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    delete?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    connect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    update?: Prisma.GuestGroupUpdateWithWhereUniqueWithoutEventInput | Prisma.GuestGroupUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.GuestGroupUpdateManyWithWhereWithoutEventInput | Prisma.GuestGroupUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.GuestGroupScalarWhereInput | Prisma.GuestGroupScalarWhereInput[];
};
export type GuestGroupUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.GuestGroupCreateWithoutEventInput, Prisma.GuestGroupUncheckedCreateWithoutEventInput> | Prisma.GuestGroupCreateWithoutEventInput[] | Prisma.GuestGroupUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.GuestGroupCreateOrConnectWithoutEventInput | Prisma.GuestGroupCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.GuestGroupUpsertWithWhereUniqueWithoutEventInput | Prisma.GuestGroupUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.GuestGroupCreateManyEventInputEnvelope;
    set?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    disconnect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    delete?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    connect?: Prisma.GuestGroupWhereUniqueInput | Prisma.GuestGroupWhereUniqueInput[];
    update?: Prisma.GuestGroupUpdateWithWhereUniqueWithoutEventInput | Prisma.GuestGroupUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.GuestGroupUpdateManyWithWhereWithoutEventInput | Prisma.GuestGroupUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.GuestGroupScalarWhereInput | Prisma.GuestGroupScalarWhereInput[];
};
export type GuestGroupCreateNestedOneWithoutInvitationsInput = {
    create?: Prisma.XOR<Prisma.GuestGroupCreateWithoutInvitationsInput, Prisma.GuestGroupUncheckedCreateWithoutInvitationsInput>;
    connectOrCreate?: Prisma.GuestGroupCreateOrConnectWithoutInvitationsInput;
    connect?: Prisma.GuestGroupWhereUniqueInput;
};
export type GuestGroupUpdateOneWithoutInvitationsNestedInput = {
    create?: Prisma.XOR<Prisma.GuestGroupCreateWithoutInvitationsInput, Prisma.GuestGroupUncheckedCreateWithoutInvitationsInput>;
    connectOrCreate?: Prisma.GuestGroupCreateOrConnectWithoutInvitationsInput;
    upsert?: Prisma.GuestGroupUpsertWithoutInvitationsInput;
    disconnect?: Prisma.GuestGroupWhereInput | boolean;
    delete?: Prisma.GuestGroupWhereInput | boolean;
    connect?: Prisma.GuestGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GuestGroupUpdateToOneWithWhereWithoutInvitationsInput, Prisma.GuestGroupUpdateWithoutInvitationsInput>, Prisma.GuestGroupUncheckedUpdateWithoutInvitationsInput>;
};
export type GuestGroupCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutGuestGroupsInput;
    invitations?: Prisma.InvitationCreateNestedManyWithoutGroupInput;
};
export type GuestGroupUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    eventId: string;
    name: string;
    createdAt?: Date | string;
    invitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutGroupInput;
};
export type GuestGroupCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.GuestGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestGroupCreateWithoutOrganizationInput, Prisma.GuestGroupUncheckedCreateWithoutOrganizationInput>;
};
export type GuestGroupCreateManyOrganizationInputEnvelope = {
    data: Prisma.GuestGroupCreateManyOrganizationInput | Prisma.GuestGroupCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type GuestGroupUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.GuestGroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.GuestGroupUpdateWithoutOrganizationInput, Prisma.GuestGroupUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.GuestGroupCreateWithoutOrganizationInput, Prisma.GuestGroupUncheckedCreateWithoutOrganizationInput>;
};
export type GuestGroupUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.GuestGroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.GuestGroupUpdateWithoutOrganizationInput, Prisma.GuestGroupUncheckedUpdateWithoutOrganizationInput>;
};
export type GuestGroupUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.GuestGroupScalarWhereInput;
    data: Prisma.XOR<Prisma.GuestGroupUpdateManyMutationInput, Prisma.GuestGroupUncheckedUpdateManyWithoutOrganizationInput>;
};
export type GuestGroupScalarWhereInput = {
    AND?: Prisma.GuestGroupScalarWhereInput | Prisma.GuestGroupScalarWhereInput[];
    OR?: Prisma.GuestGroupScalarWhereInput[];
    NOT?: Prisma.GuestGroupScalarWhereInput | Prisma.GuestGroupScalarWhereInput[];
    id?: Prisma.StringFilter<"GuestGroup"> | string;
    organizationId?: Prisma.StringFilter<"GuestGroup"> | string;
    eventId?: Prisma.StringFilter<"GuestGroup"> | string;
    name?: Prisma.StringFilter<"GuestGroup"> | string;
    createdAt?: Prisma.DateTimeFilter<"GuestGroup"> | Date | string;
};
export type GuestGroupCreateWithoutEventInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGuestGroupsInput;
    invitations?: Prisma.InvitationCreateNestedManyWithoutGroupInput;
};
export type GuestGroupUncheckedCreateWithoutEventInput = {
    id?: string;
    organizationId: string;
    name: string;
    createdAt?: Date | string;
    invitations?: Prisma.InvitationUncheckedCreateNestedManyWithoutGroupInput;
};
export type GuestGroupCreateOrConnectWithoutEventInput = {
    where: Prisma.GuestGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestGroupCreateWithoutEventInput, Prisma.GuestGroupUncheckedCreateWithoutEventInput>;
};
export type GuestGroupCreateManyEventInputEnvelope = {
    data: Prisma.GuestGroupCreateManyEventInput | Prisma.GuestGroupCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type GuestGroupUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.GuestGroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.GuestGroupUpdateWithoutEventInput, Prisma.GuestGroupUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.GuestGroupCreateWithoutEventInput, Prisma.GuestGroupUncheckedCreateWithoutEventInput>;
};
export type GuestGroupUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.GuestGroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.GuestGroupUpdateWithoutEventInput, Prisma.GuestGroupUncheckedUpdateWithoutEventInput>;
};
export type GuestGroupUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.GuestGroupScalarWhereInput;
    data: Prisma.XOR<Prisma.GuestGroupUpdateManyMutationInput, Prisma.GuestGroupUncheckedUpdateManyWithoutEventInput>;
};
export type GuestGroupCreateWithoutInvitationsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGuestGroupsInput;
    event: Prisma.EventCreateNestedOneWithoutGuestGroupsInput;
};
export type GuestGroupUncheckedCreateWithoutInvitationsInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    name: string;
    createdAt?: Date | string;
};
export type GuestGroupCreateOrConnectWithoutInvitationsInput = {
    where: Prisma.GuestGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestGroupCreateWithoutInvitationsInput, Prisma.GuestGroupUncheckedCreateWithoutInvitationsInput>;
};
export type GuestGroupUpsertWithoutInvitationsInput = {
    update: Prisma.XOR<Prisma.GuestGroupUpdateWithoutInvitationsInput, Prisma.GuestGroupUncheckedUpdateWithoutInvitationsInput>;
    create: Prisma.XOR<Prisma.GuestGroupCreateWithoutInvitationsInput, Prisma.GuestGroupUncheckedCreateWithoutInvitationsInput>;
    where?: Prisma.GuestGroupWhereInput;
};
export type GuestGroupUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: Prisma.GuestGroupWhereInput;
    data: Prisma.XOR<Prisma.GuestGroupUpdateWithoutInvitationsInput, Prisma.GuestGroupUncheckedUpdateWithoutInvitationsInput>;
};
export type GuestGroupUpdateWithoutInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGuestGroupsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutGuestGroupsNestedInput;
};
export type GuestGroupUncheckedUpdateWithoutInvitationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGroupCreateManyOrganizationInput = {
    id?: string;
    eventId: string;
    name: string;
    createdAt?: Date | string;
};
export type GuestGroupUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutGuestGroupsNestedInput;
    invitations?: Prisma.InvitationUpdateManyWithoutGroupNestedInput;
};
export type GuestGroupUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitations?: Prisma.InvitationUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GuestGroupUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGroupCreateManyEventInput = {
    id?: string;
    organizationId: string;
    name: string;
    createdAt?: Date | string;
};
export type GuestGroupUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGuestGroupsNestedInput;
    invitations?: Prisma.InvitationUpdateManyWithoutGroupNestedInput;
};
export type GuestGroupUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitations?: Prisma.InvitationUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GuestGroupUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestGroupCountOutputType = {
    invitations: number;
};
export type GuestGroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invitations?: boolean | GuestGroupCountOutputTypeCountInvitationsArgs;
};
export type GuestGroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupCountOutputTypeSelect<ExtArgs> | null;
};
export type GuestGroupCountOutputTypeCountInvitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvitationWhereInput;
};
export type GuestGroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    invitations?: boolean | Prisma.GuestGroup$invitationsArgs<ExtArgs>;
    _count?: boolean | Prisma.GuestGroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["guestGroup"]>;
export type GuestGroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["guestGroup"]>;
export type GuestGroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["guestGroup"]>;
export type GuestGroupSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    name?: boolean;
    createdAt?: boolean;
};
export type GuestGroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "eventId" | "name" | "createdAt", ExtArgs["result"]["guestGroup"]>;
export type GuestGroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    invitations?: boolean | Prisma.GuestGroup$invitationsArgs<ExtArgs>;
    _count?: boolean | Prisma.GuestGroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GuestGroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type GuestGroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $GuestGroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GuestGroup";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs>;
        invitations: Prisma.$InvitationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        eventId: string;
        name: string;
        createdAt: Date;
    }, ExtArgs["result"]["guestGroup"]>;
    composites: {};
};
export type GuestGroupGetPayload<S extends boolean | null | undefined | GuestGroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload, S>;
export type GuestGroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GuestGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GuestGroupCountAggregateInputType | true;
};
export interface GuestGroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GuestGroup'];
        meta: {
            name: 'GuestGroup';
        };
    };
    findUnique<T extends GuestGroupFindUniqueArgs>(args: Prisma.SelectSubset<T, GuestGroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GuestGroupClient<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GuestGroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GuestGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuestGroupClient<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GuestGroupFindFirstArgs>(args?: Prisma.SelectSubset<T, GuestGroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__GuestGroupClient<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GuestGroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GuestGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuestGroupClient<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GuestGroupFindManyArgs>(args?: Prisma.SelectSubset<T, GuestGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GuestGroupCreateArgs>(args: Prisma.SelectSubset<T, GuestGroupCreateArgs<ExtArgs>>): Prisma.Prisma__GuestGroupClient<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GuestGroupCreateManyArgs>(args?: Prisma.SelectSubset<T, GuestGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GuestGroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GuestGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GuestGroupDeleteArgs>(args: Prisma.SelectSubset<T, GuestGroupDeleteArgs<ExtArgs>>): Prisma.Prisma__GuestGroupClient<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GuestGroupUpdateArgs>(args: Prisma.SelectSubset<T, GuestGroupUpdateArgs<ExtArgs>>): Prisma.Prisma__GuestGroupClient<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GuestGroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, GuestGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GuestGroupUpdateManyArgs>(args: Prisma.SelectSubset<T, GuestGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GuestGroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GuestGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GuestGroupUpsertArgs>(args: Prisma.SelectSubset<T, GuestGroupUpsertArgs<ExtArgs>>): Prisma.Prisma__GuestGroupClient<runtime.Types.Result.GetResult<Prisma.$GuestGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GuestGroupCountArgs>(args?: Prisma.Subset<T, GuestGroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GuestGroupCountAggregateOutputType> : number>;
    aggregate<T extends GuestGroupAggregateArgs>(args: Prisma.Subset<T, GuestGroupAggregateArgs>): Prisma.PrismaPromise<GetGuestGroupAggregateType<T>>;
    groupBy<T extends GuestGroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GuestGroupGroupByArgs['orderBy'];
    } : {
        orderBy?: GuestGroupGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GuestGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GuestGroupFieldRefs;
}
export interface Prisma__GuestGroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invitations<T extends Prisma.GuestGroup$invitationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GuestGroup$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GuestGroupFieldRefs {
    readonly id: Prisma.FieldRef<"GuestGroup", 'String'>;
    readonly organizationId: Prisma.FieldRef<"GuestGroup", 'String'>;
    readonly eventId: Prisma.FieldRef<"GuestGroup", 'String'>;
    readonly name: Prisma.FieldRef<"GuestGroup", 'String'>;
    readonly createdAt: Prisma.FieldRef<"GuestGroup", 'DateTime'>;
}
export type GuestGroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelect<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    include?: Prisma.GuestGroupInclude<ExtArgs> | null;
    where: Prisma.GuestGroupWhereUniqueInput;
};
export type GuestGroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelect<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    include?: Prisma.GuestGroupInclude<ExtArgs> | null;
    where: Prisma.GuestGroupWhereUniqueInput;
};
export type GuestGroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GuestGroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GuestGroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GuestGroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelect<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    include?: Prisma.GuestGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestGroupCreateInput, Prisma.GuestGroupUncheckedCreateInput>;
};
export type GuestGroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GuestGroupCreateManyInput | Prisma.GuestGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GuestGroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    data: Prisma.GuestGroupCreateManyInput | Prisma.GuestGroupCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GuestGroupIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GuestGroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelect<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    include?: Prisma.GuestGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestGroupUpdateInput, Prisma.GuestGroupUncheckedUpdateInput>;
    where: Prisma.GuestGroupWhereUniqueInput;
};
export type GuestGroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GuestGroupUpdateManyMutationInput, Prisma.GuestGroupUncheckedUpdateManyInput>;
    where?: Prisma.GuestGroupWhereInput;
    limit?: number;
};
export type GuestGroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestGroupUpdateManyMutationInput, Prisma.GuestGroupUncheckedUpdateManyInput>;
    where?: Prisma.GuestGroupWhereInput;
    limit?: number;
    include?: Prisma.GuestGroupIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GuestGroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelect<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    include?: Prisma.GuestGroupInclude<ExtArgs> | null;
    where: Prisma.GuestGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestGroupCreateInput, Prisma.GuestGroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GuestGroupUpdateInput, Prisma.GuestGroupUncheckedUpdateInput>;
};
export type GuestGroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelect<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    include?: Prisma.GuestGroupInclude<ExtArgs> | null;
    where: Prisma.GuestGroupWhereUniqueInput;
};
export type GuestGroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestGroupWhereInput;
    limit?: number;
};
export type GuestGroup$invitationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GuestGroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestGroupSelect<ExtArgs> | null;
    omit?: Prisma.GuestGroupOmit<ExtArgs> | null;
    include?: Prisma.GuestGroupInclude<ExtArgs> | null;
};
