import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CheckInModel = runtime.Types.Result.DefaultSelection<Prisma.$CheckInPayload>;
export type AggregateCheckIn = {
    _count: CheckInCountAggregateOutputType | null;
    _avg: CheckInAvgAggregateOutputType | null;
    _sum: CheckInSumAggregateOutputType | null;
    _min: CheckInMinAggregateOutputType | null;
    _max: CheckInMaxAggregateOutputType | null;
};
export type CheckInAvgAggregateOutputType = {
    paxCount: number | null;
};
export type CheckInSumAggregateOutputType = {
    paxCount: number | null;
};
export type CheckInMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    invitationId: string | null;
    checkedInById: string | null;
    paxCount: number | null;
    checkedInAt: Date | null;
};
export type CheckInMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    invitationId: string | null;
    checkedInById: string | null;
    paxCount: number | null;
    checkedInAt: Date | null;
};
export type CheckInCountAggregateOutputType = {
    id: number;
    organizationId: number;
    invitationId: number;
    checkedInById: number;
    paxCount: number;
    checkedInAt: number;
    _all: number;
};
export type CheckInAvgAggregateInputType = {
    paxCount?: true;
};
export type CheckInSumAggregateInputType = {
    paxCount?: true;
};
export type CheckInMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    invitationId?: true;
    checkedInById?: true;
    paxCount?: true;
    checkedInAt?: true;
};
export type CheckInMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    invitationId?: true;
    checkedInById?: true;
    paxCount?: true;
    checkedInAt?: true;
};
export type CheckInCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    invitationId?: true;
    checkedInById?: true;
    paxCount?: true;
    checkedInAt?: true;
    _all?: true;
};
export type CheckInAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckInWhereInput;
    orderBy?: Prisma.CheckInOrderByWithRelationInput | Prisma.CheckInOrderByWithRelationInput[];
    cursor?: Prisma.CheckInWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CheckInCountAggregateInputType;
    _avg?: CheckInAvgAggregateInputType;
    _sum?: CheckInSumAggregateInputType;
    _min?: CheckInMinAggregateInputType;
    _max?: CheckInMaxAggregateInputType;
};
export type GetCheckInAggregateType<T extends CheckInAggregateArgs> = {
    [P in keyof T & keyof AggregateCheckIn]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCheckIn[P]> : Prisma.GetScalarType<T[P], AggregateCheckIn[P]>;
};
export type CheckInGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckInWhereInput;
    orderBy?: Prisma.CheckInOrderByWithAggregationInput | Prisma.CheckInOrderByWithAggregationInput[];
    by: Prisma.CheckInScalarFieldEnum[] | Prisma.CheckInScalarFieldEnum;
    having?: Prisma.CheckInScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CheckInCountAggregateInputType | true;
    _avg?: CheckInAvgAggregateInputType;
    _sum?: CheckInSumAggregateInputType;
    _min?: CheckInMinAggregateInputType;
    _max?: CheckInMaxAggregateInputType;
};
export type CheckInGroupByOutputType = {
    id: string;
    organizationId: string;
    invitationId: string;
    checkedInById: string | null;
    paxCount: number;
    checkedInAt: Date;
    _count: CheckInCountAggregateOutputType | null;
    _avg: CheckInAvgAggregateOutputType | null;
    _sum: CheckInSumAggregateOutputType | null;
    _min: CheckInMinAggregateOutputType | null;
    _max: CheckInMaxAggregateOutputType | null;
};
export type GetCheckInGroupByPayload<T extends CheckInGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CheckInGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CheckInGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CheckInGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CheckInGroupByOutputType[P]>;
}>>;
export type CheckInWhereInput = {
    AND?: Prisma.CheckInWhereInput | Prisma.CheckInWhereInput[];
    OR?: Prisma.CheckInWhereInput[];
    NOT?: Prisma.CheckInWhereInput | Prisma.CheckInWhereInput[];
    id?: Prisma.StringFilter<"CheckIn"> | string;
    organizationId?: Prisma.StringFilter<"CheckIn"> | string;
    invitationId?: Prisma.StringFilter<"CheckIn"> | string;
    checkedInById?: Prisma.StringNullableFilter<"CheckIn"> | string | null;
    paxCount?: Prisma.IntFilter<"CheckIn"> | number;
    checkedInAt?: Prisma.DateTimeFilter<"CheckIn"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    invitation?: Prisma.XOR<Prisma.InvitationScalarRelationFilter, Prisma.InvitationWhereInput>;
    checkedInBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type CheckInOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    checkedInById?: Prisma.SortOrderInput | Prisma.SortOrder;
    paxCount?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    invitation?: Prisma.InvitationOrderByWithRelationInput;
    checkedInBy?: Prisma.UserOrderByWithRelationInput;
};
export type CheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CheckInWhereInput | Prisma.CheckInWhereInput[];
    OR?: Prisma.CheckInWhereInput[];
    NOT?: Prisma.CheckInWhereInput | Prisma.CheckInWhereInput[];
    organizationId?: Prisma.StringFilter<"CheckIn"> | string;
    invitationId?: Prisma.StringFilter<"CheckIn"> | string;
    checkedInById?: Prisma.StringNullableFilter<"CheckIn"> | string | null;
    paxCount?: Prisma.IntFilter<"CheckIn"> | number;
    checkedInAt?: Prisma.DateTimeFilter<"CheckIn"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    invitation?: Prisma.XOR<Prisma.InvitationScalarRelationFilter, Prisma.InvitationWhereInput>;
    checkedInBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type CheckInOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    checkedInById?: Prisma.SortOrderInput | Prisma.SortOrder;
    paxCount?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
    _count?: Prisma.CheckInCountOrderByAggregateInput;
    _avg?: Prisma.CheckInAvgOrderByAggregateInput;
    _max?: Prisma.CheckInMaxOrderByAggregateInput;
    _min?: Prisma.CheckInMinOrderByAggregateInput;
    _sum?: Prisma.CheckInSumOrderByAggregateInput;
};
export type CheckInScalarWhereWithAggregatesInput = {
    AND?: Prisma.CheckInScalarWhereWithAggregatesInput | Prisma.CheckInScalarWhereWithAggregatesInput[];
    OR?: Prisma.CheckInScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CheckInScalarWhereWithAggregatesInput | Prisma.CheckInScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CheckIn"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"CheckIn"> | string;
    invitationId?: Prisma.StringWithAggregatesFilter<"CheckIn"> | string;
    checkedInById?: Prisma.StringNullableWithAggregatesFilter<"CheckIn"> | string | null;
    paxCount?: Prisma.IntWithAggregatesFilter<"CheckIn"> | number;
    checkedInAt?: Prisma.DateTimeWithAggregatesFilter<"CheckIn"> | Date | string;
};
export type CheckInCreateInput = {
    id?: string;
    paxCount?: number;
    checkedInAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutCheckInsInput;
    invitation: Prisma.InvitationCreateNestedOneWithoutCheckInsInput;
    checkedInBy?: Prisma.UserCreateNestedOneWithoutCheckInsInput;
};
export type CheckInUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    invitationId: string;
    checkedInById?: string | null;
    paxCount?: number;
    checkedInAt?: Date | string;
};
export type CheckInUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutCheckInsNestedInput;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutCheckInsNestedInput;
    checkedInBy?: Prisma.UserUpdateOneWithoutCheckInsNestedInput;
};
export type CheckInUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedInById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckInCreateManyInput = {
    id?: string;
    organizationId: string;
    invitationId: string;
    checkedInById?: string | null;
    paxCount?: number;
    checkedInAt?: Date | string;
};
export type CheckInUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckInUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedInById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckInListRelationFilter = {
    every?: Prisma.CheckInWhereInput;
    some?: Prisma.CheckInWhereInput;
    none?: Prisma.CheckInWhereInput;
};
export type CheckInOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CheckInCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    checkedInById?: Prisma.SortOrder;
    paxCount?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
};
export type CheckInAvgOrderByAggregateInput = {
    paxCount?: Prisma.SortOrder;
};
export type CheckInMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    checkedInById?: Prisma.SortOrder;
    paxCount?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
};
export type CheckInMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    checkedInById?: Prisma.SortOrder;
    paxCount?: Prisma.SortOrder;
    checkedInAt?: Prisma.SortOrder;
};
export type CheckInSumOrderByAggregateInput = {
    paxCount?: Prisma.SortOrder;
};
export type CheckInCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutOrganizationInput, Prisma.CheckInUncheckedCreateWithoutOrganizationInput> | Prisma.CheckInCreateWithoutOrganizationInput[] | Prisma.CheckInUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutOrganizationInput | Prisma.CheckInCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.CheckInCreateManyOrganizationInputEnvelope;
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
};
export type CheckInUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutOrganizationInput, Prisma.CheckInUncheckedCreateWithoutOrganizationInput> | Prisma.CheckInCreateWithoutOrganizationInput[] | Prisma.CheckInUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutOrganizationInput | Prisma.CheckInCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.CheckInCreateManyOrganizationInputEnvelope;
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
};
export type CheckInUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutOrganizationInput, Prisma.CheckInUncheckedCreateWithoutOrganizationInput> | Prisma.CheckInCreateWithoutOrganizationInput[] | Prisma.CheckInUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutOrganizationInput | Prisma.CheckInCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.CheckInUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.CheckInUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.CheckInCreateManyOrganizationInputEnvelope;
    set?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    disconnect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    delete?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    update?: Prisma.CheckInUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.CheckInUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.CheckInUpdateManyWithWhereWithoutOrganizationInput | Prisma.CheckInUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.CheckInScalarWhereInput | Prisma.CheckInScalarWhereInput[];
};
export type CheckInUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutOrganizationInput, Prisma.CheckInUncheckedCreateWithoutOrganizationInput> | Prisma.CheckInCreateWithoutOrganizationInput[] | Prisma.CheckInUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutOrganizationInput | Prisma.CheckInCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.CheckInUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.CheckInUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.CheckInCreateManyOrganizationInputEnvelope;
    set?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    disconnect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    delete?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    update?: Prisma.CheckInUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.CheckInUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.CheckInUpdateManyWithWhereWithoutOrganizationInput | Prisma.CheckInUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.CheckInScalarWhereInput | Prisma.CheckInScalarWhereInput[];
};
export type CheckInCreateNestedManyWithoutCheckedInByInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutCheckedInByInput, Prisma.CheckInUncheckedCreateWithoutCheckedInByInput> | Prisma.CheckInCreateWithoutCheckedInByInput[] | Prisma.CheckInUncheckedCreateWithoutCheckedInByInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutCheckedInByInput | Prisma.CheckInCreateOrConnectWithoutCheckedInByInput[];
    createMany?: Prisma.CheckInCreateManyCheckedInByInputEnvelope;
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
};
export type CheckInUncheckedCreateNestedManyWithoutCheckedInByInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutCheckedInByInput, Prisma.CheckInUncheckedCreateWithoutCheckedInByInput> | Prisma.CheckInCreateWithoutCheckedInByInput[] | Prisma.CheckInUncheckedCreateWithoutCheckedInByInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutCheckedInByInput | Prisma.CheckInCreateOrConnectWithoutCheckedInByInput[];
    createMany?: Prisma.CheckInCreateManyCheckedInByInputEnvelope;
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
};
export type CheckInUpdateManyWithoutCheckedInByNestedInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutCheckedInByInput, Prisma.CheckInUncheckedCreateWithoutCheckedInByInput> | Prisma.CheckInCreateWithoutCheckedInByInput[] | Prisma.CheckInUncheckedCreateWithoutCheckedInByInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutCheckedInByInput | Prisma.CheckInCreateOrConnectWithoutCheckedInByInput[];
    upsert?: Prisma.CheckInUpsertWithWhereUniqueWithoutCheckedInByInput | Prisma.CheckInUpsertWithWhereUniqueWithoutCheckedInByInput[];
    createMany?: Prisma.CheckInCreateManyCheckedInByInputEnvelope;
    set?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    disconnect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    delete?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    update?: Prisma.CheckInUpdateWithWhereUniqueWithoutCheckedInByInput | Prisma.CheckInUpdateWithWhereUniqueWithoutCheckedInByInput[];
    updateMany?: Prisma.CheckInUpdateManyWithWhereWithoutCheckedInByInput | Prisma.CheckInUpdateManyWithWhereWithoutCheckedInByInput[];
    deleteMany?: Prisma.CheckInScalarWhereInput | Prisma.CheckInScalarWhereInput[];
};
export type CheckInUncheckedUpdateManyWithoutCheckedInByNestedInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutCheckedInByInput, Prisma.CheckInUncheckedCreateWithoutCheckedInByInput> | Prisma.CheckInCreateWithoutCheckedInByInput[] | Prisma.CheckInUncheckedCreateWithoutCheckedInByInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutCheckedInByInput | Prisma.CheckInCreateOrConnectWithoutCheckedInByInput[];
    upsert?: Prisma.CheckInUpsertWithWhereUniqueWithoutCheckedInByInput | Prisma.CheckInUpsertWithWhereUniqueWithoutCheckedInByInput[];
    createMany?: Prisma.CheckInCreateManyCheckedInByInputEnvelope;
    set?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    disconnect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    delete?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    update?: Prisma.CheckInUpdateWithWhereUniqueWithoutCheckedInByInput | Prisma.CheckInUpdateWithWhereUniqueWithoutCheckedInByInput[];
    updateMany?: Prisma.CheckInUpdateManyWithWhereWithoutCheckedInByInput | Prisma.CheckInUpdateManyWithWhereWithoutCheckedInByInput[];
    deleteMany?: Prisma.CheckInScalarWhereInput | Prisma.CheckInScalarWhereInput[];
};
export type CheckInCreateNestedManyWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutInvitationInput, Prisma.CheckInUncheckedCreateWithoutInvitationInput> | Prisma.CheckInCreateWithoutInvitationInput[] | Prisma.CheckInUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutInvitationInput | Prisma.CheckInCreateOrConnectWithoutInvitationInput[];
    createMany?: Prisma.CheckInCreateManyInvitationInputEnvelope;
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
};
export type CheckInUncheckedCreateNestedManyWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutInvitationInput, Prisma.CheckInUncheckedCreateWithoutInvitationInput> | Prisma.CheckInCreateWithoutInvitationInput[] | Prisma.CheckInUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutInvitationInput | Prisma.CheckInCreateOrConnectWithoutInvitationInput[];
    createMany?: Prisma.CheckInCreateManyInvitationInputEnvelope;
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
};
export type CheckInUpdateManyWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutInvitationInput, Prisma.CheckInUncheckedCreateWithoutInvitationInput> | Prisma.CheckInCreateWithoutInvitationInput[] | Prisma.CheckInUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutInvitationInput | Prisma.CheckInCreateOrConnectWithoutInvitationInput[];
    upsert?: Prisma.CheckInUpsertWithWhereUniqueWithoutInvitationInput | Prisma.CheckInUpsertWithWhereUniqueWithoutInvitationInput[];
    createMany?: Prisma.CheckInCreateManyInvitationInputEnvelope;
    set?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    disconnect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    delete?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    update?: Prisma.CheckInUpdateWithWhereUniqueWithoutInvitationInput | Prisma.CheckInUpdateWithWhereUniqueWithoutInvitationInput[];
    updateMany?: Prisma.CheckInUpdateManyWithWhereWithoutInvitationInput | Prisma.CheckInUpdateManyWithWhereWithoutInvitationInput[];
    deleteMany?: Prisma.CheckInScalarWhereInput | Prisma.CheckInScalarWhereInput[];
};
export type CheckInUncheckedUpdateManyWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.CheckInCreateWithoutInvitationInput, Prisma.CheckInUncheckedCreateWithoutInvitationInput> | Prisma.CheckInCreateWithoutInvitationInput[] | Prisma.CheckInUncheckedCreateWithoutInvitationInput[];
    connectOrCreate?: Prisma.CheckInCreateOrConnectWithoutInvitationInput | Prisma.CheckInCreateOrConnectWithoutInvitationInput[];
    upsert?: Prisma.CheckInUpsertWithWhereUniqueWithoutInvitationInput | Prisma.CheckInUpsertWithWhereUniqueWithoutInvitationInput[];
    createMany?: Prisma.CheckInCreateManyInvitationInputEnvelope;
    set?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    disconnect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    delete?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    connect?: Prisma.CheckInWhereUniqueInput | Prisma.CheckInWhereUniqueInput[];
    update?: Prisma.CheckInUpdateWithWhereUniqueWithoutInvitationInput | Prisma.CheckInUpdateWithWhereUniqueWithoutInvitationInput[];
    updateMany?: Prisma.CheckInUpdateManyWithWhereWithoutInvitationInput | Prisma.CheckInUpdateManyWithWhereWithoutInvitationInput[];
    deleteMany?: Prisma.CheckInScalarWhereInput | Prisma.CheckInScalarWhereInput[];
};
export type CheckInCreateWithoutOrganizationInput = {
    id?: string;
    paxCount?: number;
    checkedInAt?: Date | string;
    invitation: Prisma.InvitationCreateNestedOneWithoutCheckInsInput;
    checkedInBy?: Prisma.UserCreateNestedOneWithoutCheckInsInput;
};
export type CheckInUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    invitationId: string;
    checkedInById?: string | null;
    paxCount?: number;
    checkedInAt?: Date | string;
};
export type CheckInCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.CheckInWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckInCreateWithoutOrganizationInput, Prisma.CheckInUncheckedCreateWithoutOrganizationInput>;
};
export type CheckInCreateManyOrganizationInputEnvelope = {
    data: Prisma.CheckInCreateManyOrganizationInput | Prisma.CheckInCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type CheckInUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.CheckInWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckInUpdateWithoutOrganizationInput, Prisma.CheckInUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.CheckInCreateWithoutOrganizationInput, Prisma.CheckInUncheckedCreateWithoutOrganizationInput>;
};
export type CheckInUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.CheckInWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckInUpdateWithoutOrganizationInput, Prisma.CheckInUncheckedUpdateWithoutOrganizationInput>;
};
export type CheckInUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.CheckInScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckInUpdateManyMutationInput, Prisma.CheckInUncheckedUpdateManyWithoutOrganizationInput>;
};
export type CheckInScalarWhereInput = {
    AND?: Prisma.CheckInScalarWhereInput | Prisma.CheckInScalarWhereInput[];
    OR?: Prisma.CheckInScalarWhereInput[];
    NOT?: Prisma.CheckInScalarWhereInput | Prisma.CheckInScalarWhereInput[];
    id?: Prisma.StringFilter<"CheckIn"> | string;
    organizationId?: Prisma.StringFilter<"CheckIn"> | string;
    invitationId?: Prisma.StringFilter<"CheckIn"> | string;
    checkedInById?: Prisma.StringNullableFilter<"CheckIn"> | string | null;
    paxCount?: Prisma.IntFilter<"CheckIn"> | number;
    checkedInAt?: Prisma.DateTimeFilter<"CheckIn"> | Date | string;
};
export type CheckInCreateWithoutCheckedInByInput = {
    id?: string;
    paxCount?: number;
    checkedInAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutCheckInsInput;
    invitation: Prisma.InvitationCreateNestedOneWithoutCheckInsInput;
};
export type CheckInUncheckedCreateWithoutCheckedInByInput = {
    id?: string;
    organizationId: string;
    invitationId: string;
    paxCount?: number;
    checkedInAt?: Date | string;
};
export type CheckInCreateOrConnectWithoutCheckedInByInput = {
    where: Prisma.CheckInWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckInCreateWithoutCheckedInByInput, Prisma.CheckInUncheckedCreateWithoutCheckedInByInput>;
};
export type CheckInCreateManyCheckedInByInputEnvelope = {
    data: Prisma.CheckInCreateManyCheckedInByInput | Prisma.CheckInCreateManyCheckedInByInput[];
    skipDuplicates?: boolean;
};
export type CheckInUpsertWithWhereUniqueWithoutCheckedInByInput = {
    where: Prisma.CheckInWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckInUpdateWithoutCheckedInByInput, Prisma.CheckInUncheckedUpdateWithoutCheckedInByInput>;
    create: Prisma.XOR<Prisma.CheckInCreateWithoutCheckedInByInput, Prisma.CheckInUncheckedCreateWithoutCheckedInByInput>;
};
export type CheckInUpdateWithWhereUniqueWithoutCheckedInByInput = {
    where: Prisma.CheckInWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckInUpdateWithoutCheckedInByInput, Prisma.CheckInUncheckedUpdateWithoutCheckedInByInput>;
};
export type CheckInUpdateManyWithWhereWithoutCheckedInByInput = {
    where: Prisma.CheckInScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckInUpdateManyMutationInput, Prisma.CheckInUncheckedUpdateManyWithoutCheckedInByInput>;
};
export type CheckInCreateWithoutInvitationInput = {
    id?: string;
    paxCount?: number;
    checkedInAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutCheckInsInput;
    checkedInBy?: Prisma.UserCreateNestedOneWithoutCheckInsInput;
};
export type CheckInUncheckedCreateWithoutInvitationInput = {
    id?: string;
    organizationId: string;
    checkedInById?: string | null;
    paxCount?: number;
    checkedInAt?: Date | string;
};
export type CheckInCreateOrConnectWithoutInvitationInput = {
    where: Prisma.CheckInWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckInCreateWithoutInvitationInput, Prisma.CheckInUncheckedCreateWithoutInvitationInput>;
};
export type CheckInCreateManyInvitationInputEnvelope = {
    data: Prisma.CheckInCreateManyInvitationInput | Prisma.CheckInCreateManyInvitationInput[];
    skipDuplicates?: boolean;
};
export type CheckInUpsertWithWhereUniqueWithoutInvitationInput = {
    where: Prisma.CheckInWhereUniqueInput;
    update: Prisma.XOR<Prisma.CheckInUpdateWithoutInvitationInput, Prisma.CheckInUncheckedUpdateWithoutInvitationInput>;
    create: Prisma.XOR<Prisma.CheckInCreateWithoutInvitationInput, Prisma.CheckInUncheckedCreateWithoutInvitationInput>;
};
export type CheckInUpdateWithWhereUniqueWithoutInvitationInput = {
    where: Prisma.CheckInWhereUniqueInput;
    data: Prisma.XOR<Prisma.CheckInUpdateWithoutInvitationInput, Prisma.CheckInUncheckedUpdateWithoutInvitationInput>;
};
export type CheckInUpdateManyWithWhereWithoutInvitationInput = {
    where: Prisma.CheckInScalarWhereInput;
    data: Prisma.XOR<Prisma.CheckInUpdateManyMutationInput, Prisma.CheckInUncheckedUpdateManyWithoutInvitationInput>;
};
export type CheckInCreateManyOrganizationInput = {
    id?: string;
    invitationId: string;
    checkedInById?: string | null;
    paxCount?: number;
    checkedInAt?: Date | string;
};
export type CheckInUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutCheckInsNestedInput;
    checkedInBy?: Prisma.UserUpdateOneWithoutCheckInsNestedInput;
};
export type CheckInUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedInById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckInUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedInById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckInCreateManyCheckedInByInput = {
    id?: string;
    organizationId: string;
    invitationId: string;
    paxCount?: number;
    checkedInAt?: Date | string;
};
export type CheckInUpdateWithoutCheckedInByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutCheckInsNestedInput;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutCheckInsNestedInput;
};
export type CheckInUncheckedUpdateWithoutCheckedInByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckInUncheckedUpdateManyWithoutCheckedInByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckInCreateManyInvitationInput = {
    id?: string;
    organizationId: string;
    checkedInById?: string | null;
    paxCount?: number;
    checkedInAt?: Date | string;
};
export type CheckInUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutCheckInsNestedInput;
    checkedInBy?: Prisma.UserUpdateOneWithoutCheckInsNestedInput;
};
export type CheckInUncheckedUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedInById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckInUncheckedUpdateManyWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    checkedInById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    checkedInAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CheckInSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    invitationId?: boolean;
    checkedInById?: boolean;
    paxCount?: boolean;
    checkedInAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    checkedInBy?: boolean | Prisma.CheckIn$checkedInByArgs<ExtArgs>;
}, ExtArgs["result"]["checkIn"]>;
export type CheckInSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    invitationId?: boolean;
    checkedInById?: boolean;
    paxCount?: boolean;
    checkedInAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    checkedInBy?: boolean | Prisma.CheckIn$checkedInByArgs<ExtArgs>;
}, ExtArgs["result"]["checkIn"]>;
export type CheckInSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    invitationId?: boolean;
    checkedInById?: boolean;
    paxCount?: boolean;
    checkedInAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    checkedInBy?: boolean | Prisma.CheckIn$checkedInByArgs<ExtArgs>;
}, ExtArgs["result"]["checkIn"]>;
export type CheckInSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    invitationId?: boolean;
    checkedInById?: boolean;
    paxCount?: boolean;
    checkedInAt?: boolean;
};
export type CheckInOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "invitationId" | "checkedInById" | "paxCount" | "checkedInAt", ExtArgs["result"]["checkIn"]>;
export type CheckInInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    checkedInBy?: boolean | Prisma.CheckIn$checkedInByArgs<ExtArgs>;
};
export type CheckInIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    checkedInBy?: boolean | Prisma.CheckIn$checkedInByArgs<ExtArgs>;
};
export type CheckInIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
    checkedInBy?: boolean | Prisma.CheckIn$checkedInByArgs<ExtArgs>;
};
export type $CheckInPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CheckIn";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        invitation: Prisma.$InvitationPayload<ExtArgs>;
        checkedInBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        invitationId: string;
        checkedInById: string | null;
        paxCount: number;
        checkedInAt: Date;
    }, ExtArgs["result"]["checkIn"]>;
    composites: {};
};
export type CheckInGetPayload<S extends boolean | null | undefined | CheckInDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CheckInPayload, S>;
export type CheckInCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CheckInFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CheckInCountAggregateInputType | true;
};
export interface CheckInDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CheckIn'];
        meta: {
            name: 'CheckIn';
        };
    };
    findUnique<T extends CheckInFindUniqueArgs>(args: Prisma.SelectSubset<T, CheckInFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CheckInClient<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CheckInFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CheckInFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckInClient<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CheckInFindFirstArgs>(args?: Prisma.SelectSubset<T, CheckInFindFirstArgs<ExtArgs>>): Prisma.Prisma__CheckInClient<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CheckInFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CheckInFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CheckInClient<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CheckInFindManyArgs>(args?: Prisma.SelectSubset<T, CheckInFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CheckInCreateArgs>(args: Prisma.SelectSubset<T, CheckInCreateArgs<ExtArgs>>): Prisma.Prisma__CheckInClient<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CheckInCreateManyArgs>(args?: Prisma.SelectSubset<T, CheckInCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CheckInCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CheckInCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CheckInDeleteArgs>(args: Prisma.SelectSubset<T, CheckInDeleteArgs<ExtArgs>>): Prisma.Prisma__CheckInClient<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CheckInUpdateArgs>(args: Prisma.SelectSubset<T, CheckInUpdateArgs<ExtArgs>>): Prisma.Prisma__CheckInClient<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CheckInDeleteManyArgs>(args?: Prisma.SelectSubset<T, CheckInDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CheckInUpdateManyArgs>(args: Prisma.SelectSubset<T, CheckInUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CheckInUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CheckInUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CheckInUpsertArgs>(args: Prisma.SelectSubset<T, CheckInUpsertArgs<ExtArgs>>): Prisma.Prisma__CheckInClient<runtime.Types.Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CheckInCountArgs>(args?: Prisma.Subset<T, CheckInCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CheckInCountAggregateOutputType> : number>;
    aggregate<T extends CheckInAggregateArgs>(args: Prisma.Subset<T, CheckInAggregateArgs>): Prisma.PrismaPromise<GetCheckInAggregateType<T>>;
    groupBy<T extends CheckInGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CheckInGroupByArgs['orderBy'];
    } : {
        orderBy?: CheckInGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CheckInFieldRefs;
}
export interface Prisma__CheckInClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invitation<T extends Prisma.InvitationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvitationDefaultArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    checkedInBy<T extends Prisma.CheckIn$checkedInByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CheckIn$checkedInByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CheckInFieldRefs {
    readonly id: Prisma.FieldRef<"CheckIn", 'String'>;
    readonly organizationId: Prisma.FieldRef<"CheckIn", 'String'>;
    readonly invitationId: Prisma.FieldRef<"CheckIn", 'String'>;
    readonly checkedInById: Prisma.FieldRef<"CheckIn", 'String'>;
    readonly paxCount: Prisma.FieldRef<"CheckIn", 'Int'>;
    readonly checkedInAt: Prisma.FieldRef<"CheckIn", 'DateTime'>;
}
export type CheckInFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckInSelect<ExtArgs> | null;
    omit?: Prisma.CheckInOmit<ExtArgs> | null;
    include?: Prisma.CheckInInclude<ExtArgs> | null;
    where: Prisma.CheckInWhereUniqueInput;
};
export type CheckInFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckInSelect<ExtArgs> | null;
    omit?: Prisma.CheckInOmit<ExtArgs> | null;
    include?: Prisma.CheckInInclude<ExtArgs> | null;
    where: Prisma.CheckInWhereUniqueInput;
};
export type CheckInFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CheckInFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CheckInFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CheckInCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckInSelect<ExtArgs> | null;
    omit?: Prisma.CheckInOmit<ExtArgs> | null;
    include?: Prisma.CheckInInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckInCreateInput, Prisma.CheckInUncheckedCreateInput>;
};
export type CheckInCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CheckInCreateManyInput | Prisma.CheckInCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CheckInCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckInSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CheckInOmit<ExtArgs> | null;
    data: Prisma.CheckInCreateManyInput | Prisma.CheckInCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CheckInIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CheckInUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckInSelect<ExtArgs> | null;
    omit?: Prisma.CheckInOmit<ExtArgs> | null;
    include?: Prisma.CheckInInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckInUpdateInput, Prisma.CheckInUncheckedUpdateInput>;
    where: Prisma.CheckInWhereUniqueInput;
};
export type CheckInUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CheckInUpdateManyMutationInput, Prisma.CheckInUncheckedUpdateManyInput>;
    where?: Prisma.CheckInWhereInput;
    limit?: number;
};
export type CheckInUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckInSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CheckInOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CheckInUpdateManyMutationInput, Prisma.CheckInUncheckedUpdateManyInput>;
    where?: Prisma.CheckInWhereInput;
    limit?: number;
    include?: Prisma.CheckInIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CheckInUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckInSelect<ExtArgs> | null;
    omit?: Prisma.CheckInOmit<ExtArgs> | null;
    include?: Prisma.CheckInInclude<ExtArgs> | null;
    where: Prisma.CheckInWhereUniqueInput;
    create: Prisma.XOR<Prisma.CheckInCreateInput, Prisma.CheckInUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CheckInUpdateInput, Prisma.CheckInUncheckedUpdateInput>;
};
export type CheckInDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckInSelect<ExtArgs> | null;
    omit?: Prisma.CheckInOmit<ExtArgs> | null;
    include?: Prisma.CheckInInclude<ExtArgs> | null;
    where: Prisma.CheckInWhereUniqueInput;
};
export type CheckInDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CheckInWhereInput;
    limit?: number;
};
export type CheckIn$checkedInByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type CheckInDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CheckInSelect<ExtArgs> | null;
    omit?: Prisma.CheckInOmit<ExtArgs> | null;
    include?: Prisma.CheckInInclude<ExtArgs> | null;
};
