import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GuestModel = runtime.Types.Result.DefaultSelection<Prisma.$GuestPayload>;
export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null;
    _avg: GuestAvgAggregateOutputType | null;
    _sum: GuestSumAggregateOutputType | null;
    _min: GuestMinAggregateOutputType | null;
    _max: GuestMaxAggregateOutputType | null;
};
export type GuestAvgAggregateOutputType = {
    maxPax: number | null;
};
export type GuestSumAggregateOutputType = {
    maxPax: number | null;
};
export type GuestMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    eventId: string | null;
    name: string | null;
    phone: string | null;
    category: string | null;
    maxPax: number | null;
    token: string | null;
    createdAt: Date | null;
};
export type GuestMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    eventId: string | null;
    name: string | null;
    phone: string | null;
    category: string | null;
    maxPax: number | null;
    token: string | null;
    createdAt: Date | null;
};
export type GuestCountAggregateOutputType = {
    id: number;
    organizationId: number;
    eventId: number;
    name: number;
    phone: number;
    category: number;
    maxPax: number;
    token: number;
    createdAt: number;
    _all: number;
};
export type GuestAvgAggregateInputType = {
    maxPax?: true;
};
export type GuestSumAggregateInputType = {
    maxPax?: true;
};
export type GuestMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    eventId?: true;
    name?: true;
    phone?: true;
    category?: true;
    maxPax?: true;
    token?: true;
    createdAt?: true;
};
export type GuestMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    eventId?: true;
    name?: true;
    phone?: true;
    category?: true;
    maxPax?: true;
    token?: true;
    createdAt?: true;
};
export type GuestCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    eventId?: true;
    name?: true;
    phone?: true;
    category?: true;
    maxPax?: true;
    token?: true;
    createdAt?: true;
    _all?: true;
};
export type GuestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestWhereInput;
    orderBy?: Prisma.GuestOrderByWithRelationInput | Prisma.GuestOrderByWithRelationInput[];
    cursor?: Prisma.GuestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GuestCountAggregateInputType;
    _avg?: GuestAvgAggregateInputType;
    _sum?: GuestSumAggregateInputType;
    _min?: GuestMinAggregateInputType;
    _max?: GuestMaxAggregateInputType;
};
export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
    [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGuest[P]> : Prisma.GetScalarType<T[P], AggregateGuest[P]>;
};
export type GuestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestWhereInput;
    orderBy?: Prisma.GuestOrderByWithAggregationInput | Prisma.GuestOrderByWithAggregationInput[];
    by: Prisma.GuestScalarFieldEnum[] | Prisma.GuestScalarFieldEnum;
    having?: Prisma.GuestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GuestCountAggregateInputType | true;
    _avg?: GuestAvgAggregateInputType;
    _sum?: GuestSumAggregateInputType;
    _min?: GuestMinAggregateInputType;
    _max?: GuestMaxAggregateInputType;
};
export type GuestGroupByOutputType = {
    id: string;
    organizationId: string;
    eventId: string;
    name: string;
    phone: string | null;
    category: string | null;
    maxPax: number;
    token: string;
    createdAt: Date;
    _count: GuestCountAggregateOutputType | null;
    _avg: GuestAvgAggregateOutputType | null;
    _sum: GuestSumAggregateOutputType | null;
    _min: GuestMinAggregateOutputType | null;
    _max: GuestMaxAggregateOutputType | null;
};
export type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GuestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GuestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GuestGroupByOutputType[P]>;
}>>;
export type GuestWhereInput = {
    AND?: Prisma.GuestWhereInput | Prisma.GuestWhereInput[];
    OR?: Prisma.GuestWhereInput[];
    NOT?: Prisma.GuestWhereInput | Prisma.GuestWhereInput[];
    id?: Prisma.StringFilter<"Guest"> | string;
    organizationId?: Prisma.StringFilter<"Guest"> | string;
    eventId?: Prisma.StringFilter<"Guest"> | string;
    name?: Prisma.StringFilter<"Guest"> | string;
    phone?: Prisma.StringNullableFilter<"Guest"> | string | null;
    category?: Prisma.StringNullableFilter<"Guest"> | string | null;
    maxPax?: Prisma.IntFilter<"Guest"> | number;
    token?: Prisma.StringFilter<"Guest"> | string;
    createdAt?: Prisma.DateTimeFilter<"Guest"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    rsvp?: Prisma.XOR<Prisma.RsvpNullableScalarRelationFilter, Prisma.RsvpWhereInput> | null;
};
export type GuestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxPax?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    event?: Prisma.EventOrderByWithRelationInput;
    rsvp?: Prisma.RsvpOrderByWithRelationInput;
};
export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.GuestWhereInput | Prisma.GuestWhereInput[];
    OR?: Prisma.GuestWhereInput[];
    NOT?: Prisma.GuestWhereInput | Prisma.GuestWhereInput[];
    organizationId?: Prisma.StringFilter<"Guest"> | string;
    eventId?: Prisma.StringFilter<"Guest"> | string;
    name?: Prisma.StringFilter<"Guest"> | string;
    phone?: Prisma.StringNullableFilter<"Guest"> | string | null;
    category?: Prisma.StringNullableFilter<"Guest"> | string | null;
    maxPax?: Prisma.IntFilter<"Guest"> | number;
    createdAt?: Prisma.DateTimeFilter<"Guest"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    rsvp?: Prisma.XOR<Prisma.RsvpNullableScalarRelationFilter, Prisma.RsvpWhereInput> | null;
}, "id" | "token">;
export type GuestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxPax?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GuestCountOrderByAggregateInput;
    _avg?: Prisma.GuestAvgOrderByAggregateInput;
    _max?: Prisma.GuestMaxOrderByAggregateInput;
    _min?: Prisma.GuestMinOrderByAggregateInput;
    _sum?: Prisma.GuestSumOrderByAggregateInput;
};
export type GuestScalarWhereWithAggregatesInput = {
    AND?: Prisma.GuestScalarWhereWithAggregatesInput | Prisma.GuestScalarWhereWithAggregatesInput[];
    OR?: Prisma.GuestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GuestScalarWhereWithAggregatesInput | Prisma.GuestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Guest"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"Guest"> | string;
    eventId?: Prisma.StringWithAggregatesFilter<"Guest"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Guest"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Guest"> | string | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"Guest"> | string | null;
    maxPax?: Prisma.IntWithAggregatesFilter<"Guest"> | number;
    token?: Prisma.StringWithAggregatesFilter<"Guest"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Guest"> | Date | string;
};
export type GuestCreateInput = {
    id?: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGuestsInput;
    event: Prisma.EventCreateNestedOneWithoutGuestsInput;
    rsvp?: Prisma.RsvpCreateNestedOneWithoutGuestInput;
};
export type GuestUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
    rsvp?: Prisma.RsvpUncheckedCreateNestedOneWithoutGuestInput;
};
export type GuestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGuestsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutGuestsNestedInput;
    rsvp?: Prisma.RsvpUpdateOneWithoutGuestNestedInput;
};
export type GuestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUncheckedUpdateOneWithoutGuestNestedInput;
};
export type GuestCreateManyInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
};
export type GuestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestListRelationFilter = {
    every?: Prisma.GuestWhereInput;
    some?: Prisma.GuestWhereInput;
    none?: Prisma.GuestWhereInput;
};
export type GuestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GuestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    maxPax?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GuestAvgOrderByAggregateInput = {
    maxPax?: Prisma.SortOrder;
};
export type GuestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    maxPax?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GuestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    eventId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    maxPax?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GuestSumOrderByAggregateInput = {
    maxPax?: Prisma.SortOrder;
};
export type GuestScalarRelationFilter = {
    is?: Prisma.GuestWhereInput;
    isNot?: Prisma.GuestWhereInput;
};
export type GuestCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutOrganizationInput, Prisma.GuestUncheckedCreateWithoutOrganizationInput> | Prisma.GuestCreateWithoutOrganizationInput[] | Prisma.GuestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutOrganizationInput | Prisma.GuestCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.GuestCreateManyOrganizationInputEnvelope;
    connect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
};
export type GuestUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutOrganizationInput, Prisma.GuestUncheckedCreateWithoutOrganizationInput> | Prisma.GuestCreateWithoutOrganizationInput[] | Prisma.GuestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutOrganizationInput | Prisma.GuestCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.GuestCreateManyOrganizationInputEnvelope;
    connect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
};
export type GuestUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutOrganizationInput, Prisma.GuestUncheckedCreateWithoutOrganizationInput> | Prisma.GuestCreateWithoutOrganizationInput[] | Prisma.GuestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutOrganizationInput | Prisma.GuestCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.GuestUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.GuestUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.GuestCreateManyOrganizationInputEnvelope;
    set?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    disconnect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    delete?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    connect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    update?: Prisma.GuestUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.GuestUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.GuestUpdateManyWithWhereWithoutOrganizationInput | Prisma.GuestUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.GuestScalarWhereInput | Prisma.GuestScalarWhereInput[];
};
export type GuestUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutOrganizationInput, Prisma.GuestUncheckedCreateWithoutOrganizationInput> | Prisma.GuestCreateWithoutOrganizationInput[] | Prisma.GuestUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutOrganizationInput | Prisma.GuestCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.GuestUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.GuestUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.GuestCreateManyOrganizationInputEnvelope;
    set?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    disconnect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    delete?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    connect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    update?: Prisma.GuestUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.GuestUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.GuestUpdateManyWithWhereWithoutOrganizationInput | Prisma.GuestUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.GuestScalarWhereInput | Prisma.GuestScalarWhereInput[];
};
export type GuestCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutEventInput, Prisma.GuestUncheckedCreateWithoutEventInput> | Prisma.GuestCreateWithoutEventInput[] | Prisma.GuestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutEventInput | Prisma.GuestCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.GuestCreateManyEventInputEnvelope;
    connect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
};
export type GuestUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutEventInput, Prisma.GuestUncheckedCreateWithoutEventInput> | Prisma.GuestCreateWithoutEventInput[] | Prisma.GuestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutEventInput | Prisma.GuestCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.GuestCreateManyEventInputEnvelope;
    connect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
};
export type GuestUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutEventInput, Prisma.GuestUncheckedCreateWithoutEventInput> | Prisma.GuestCreateWithoutEventInput[] | Prisma.GuestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutEventInput | Prisma.GuestCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.GuestUpsertWithWhereUniqueWithoutEventInput | Prisma.GuestUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.GuestCreateManyEventInputEnvelope;
    set?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    disconnect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    delete?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    connect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    update?: Prisma.GuestUpdateWithWhereUniqueWithoutEventInput | Prisma.GuestUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.GuestUpdateManyWithWhereWithoutEventInput | Prisma.GuestUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.GuestScalarWhereInput | Prisma.GuestScalarWhereInput[];
};
export type GuestUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutEventInput, Prisma.GuestUncheckedCreateWithoutEventInput> | Prisma.GuestCreateWithoutEventInput[] | Prisma.GuestUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutEventInput | Prisma.GuestCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.GuestUpsertWithWhereUniqueWithoutEventInput | Prisma.GuestUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.GuestCreateManyEventInputEnvelope;
    set?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    disconnect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    delete?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    connect?: Prisma.GuestWhereUniqueInput | Prisma.GuestWhereUniqueInput[];
    update?: Prisma.GuestUpdateWithWhereUniqueWithoutEventInput | Prisma.GuestUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.GuestUpdateManyWithWhereWithoutEventInput | Prisma.GuestUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.GuestScalarWhereInput | Prisma.GuestScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type GuestCreateNestedOneWithoutRsvpInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutRsvpInput, Prisma.GuestUncheckedCreateWithoutRsvpInput>;
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutRsvpInput;
    connect?: Prisma.GuestWhereUniqueInput;
};
export type GuestUpdateOneRequiredWithoutRsvpNestedInput = {
    create?: Prisma.XOR<Prisma.GuestCreateWithoutRsvpInput, Prisma.GuestUncheckedCreateWithoutRsvpInput>;
    connectOrCreate?: Prisma.GuestCreateOrConnectWithoutRsvpInput;
    upsert?: Prisma.GuestUpsertWithoutRsvpInput;
    connect?: Prisma.GuestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GuestUpdateToOneWithWhereWithoutRsvpInput, Prisma.GuestUpdateWithoutRsvpInput>, Prisma.GuestUncheckedUpdateWithoutRsvpInput>;
};
export type GuestCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
    event: Prisma.EventCreateNestedOneWithoutGuestsInput;
    rsvp?: Prisma.RsvpCreateNestedOneWithoutGuestInput;
};
export type GuestUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    eventId: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
    rsvp?: Prisma.RsvpUncheckedCreateNestedOneWithoutGuestInput;
};
export type GuestCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.GuestWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestCreateWithoutOrganizationInput, Prisma.GuestUncheckedCreateWithoutOrganizationInput>;
};
export type GuestCreateManyOrganizationInputEnvelope = {
    data: Prisma.GuestCreateManyOrganizationInput | Prisma.GuestCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type GuestUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.GuestWhereUniqueInput;
    update: Prisma.XOR<Prisma.GuestUpdateWithoutOrganizationInput, Prisma.GuestUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.GuestCreateWithoutOrganizationInput, Prisma.GuestUncheckedCreateWithoutOrganizationInput>;
};
export type GuestUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.GuestWhereUniqueInput;
    data: Prisma.XOR<Prisma.GuestUpdateWithoutOrganizationInput, Prisma.GuestUncheckedUpdateWithoutOrganizationInput>;
};
export type GuestUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.GuestScalarWhereInput;
    data: Prisma.XOR<Prisma.GuestUpdateManyMutationInput, Prisma.GuestUncheckedUpdateManyWithoutOrganizationInput>;
};
export type GuestScalarWhereInput = {
    AND?: Prisma.GuestScalarWhereInput | Prisma.GuestScalarWhereInput[];
    OR?: Prisma.GuestScalarWhereInput[];
    NOT?: Prisma.GuestScalarWhereInput | Prisma.GuestScalarWhereInput[];
    id?: Prisma.StringFilter<"Guest"> | string;
    organizationId?: Prisma.StringFilter<"Guest"> | string;
    eventId?: Prisma.StringFilter<"Guest"> | string;
    name?: Prisma.StringFilter<"Guest"> | string;
    phone?: Prisma.StringNullableFilter<"Guest"> | string | null;
    category?: Prisma.StringNullableFilter<"Guest"> | string | null;
    maxPax?: Prisma.IntFilter<"Guest"> | number;
    token?: Prisma.StringFilter<"Guest"> | string;
    createdAt?: Prisma.DateTimeFilter<"Guest"> | Date | string;
};
export type GuestCreateWithoutEventInput = {
    id?: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGuestsInput;
    rsvp?: Prisma.RsvpCreateNestedOneWithoutGuestInput;
};
export type GuestUncheckedCreateWithoutEventInput = {
    id?: string;
    organizationId: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
    rsvp?: Prisma.RsvpUncheckedCreateNestedOneWithoutGuestInput;
};
export type GuestCreateOrConnectWithoutEventInput = {
    where: Prisma.GuestWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestCreateWithoutEventInput, Prisma.GuestUncheckedCreateWithoutEventInput>;
};
export type GuestCreateManyEventInputEnvelope = {
    data: Prisma.GuestCreateManyEventInput | Prisma.GuestCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type GuestUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.GuestWhereUniqueInput;
    update: Prisma.XOR<Prisma.GuestUpdateWithoutEventInput, Prisma.GuestUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.GuestCreateWithoutEventInput, Prisma.GuestUncheckedCreateWithoutEventInput>;
};
export type GuestUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.GuestWhereUniqueInput;
    data: Prisma.XOR<Prisma.GuestUpdateWithoutEventInput, Prisma.GuestUncheckedUpdateWithoutEventInput>;
};
export type GuestUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.GuestScalarWhereInput;
    data: Prisma.XOR<Prisma.GuestUpdateManyMutationInput, Prisma.GuestUncheckedUpdateManyWithoutEventInput>;
};
export type GuestCreateWithoutRsvpInput = {
    id?: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutGuestsInput;
    event: Prisma.EventCreateNestedOneWithoutGuestsInput;
};
export type GuestUncheckedCreateWithoutRsvpInput = {
    id?: string;
    organizationId: string;
    eventId: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
};
export type GuestCreateOrConnectWithoutRsvpInput = {
    where: Prisma.GuestWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestCreateWithoutRsvpInput, Prisma.GuestUncheckedCreateWithoutRsvpInput>;
};
export type GuestUpsertWithoutRsvpInput = {
    update: Prisma.XOR<Prisma.GuestUpdateWithoutRsvpInput, Prisma.GuestUncheckedUpdateWithoutRsvpInput>;
    create: Prisma.XOR<Prisma.GuestCreateWithoutRsvpInput, Prisma.GuestUncheckedCreateWithoutRsvpInput>;
    where?: Prisma.GuestWhereInput;
};
export type GuestUpdateToOneWithWhereWithoutRsvpInput = {
    where?: Prisma.GuestWhereInput;
    data: Prisma.XOR<Prisma.GuestUpdateWithoutRsvpInput, Prisma.GuestUncheckedUpdateWithoutRsvpInput>;
};
export type GuestUpdateWithoutRsvpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGuestsNestedInput;
    event?: Prisma.EventUpdateOneRequiredWithoutGuestsNestedInput;
};
export type GuestUncheckedUpdateWithoutRsvpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestCreateManyOrganizationInput = {
    id?: string;
    eventId: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
};
export type GuestUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event?: Prisma.EventUpdateOneRequiredWithoutGuestsNestedInput;
    rsvp?: Prisma.RsvpUpdateOneWithoutGuestNestedInput;
};
export type GuestUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUncheckedUpdateOneWithoutGuestNestedInput;
};
export type GuestUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestCreateManyEventInput = {
    id?: string;
    organizationId: string;
    name: string;
    phone?: string | null;
    category?: string | null;
    maxPax?: number;
    token?: string;
    createdAt?: Date | string;
};
export type GuestUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutGuestsNestedInput;
    rsvp?: Prisma.RsvpUpdateOneWithoutGuestNestedInput;
};
export type GuestUncheckedUpdateWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rsvp?: Prisma.RsvpUncheckedUpdateOneWithoutGuestNestedInput;
};
export type GuestUncheckedUpdateManyWithoutEventInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maxPax?: Prisma.IntFieldUpdateOperationsInput | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GuestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    name?: boolean;
    phone?: boolean;
    category?: boolean;
    maxPax?: boolean;
    token?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    rsvp?: boolean | Prisma.Guest$rsvpArgs<ExtArgs>;
}, ExtArgs["result"]["guest"]>;
export type GuestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    name?: boolean;
    phone?: boolean;
    category?: boolean;
    maxPax?: boolean;
    token?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["guest"]>;
export type GuestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    name?: boolean;
    phone?: boolean;
    category?: boolean;
    maxPax?: boolean;
    token?: boolean;
    createdAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["guest"]>;
export type GuestSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    name?: boolean;
    phone?: boolean;
    category?: boolean;
    maxPax?: boolean;
    token?: boolean;
    createdAt?: boolean;
};
export type GuestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "eventId" | "name" | "phone" | "category" | "maxPax" | "token" | "createdAt", ExtArgs["result"]["guest"]>;
export type GuestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    rsvp?: boolean | Prisma.Guest$rsvpArgs<ExtArgs>;
};
export type GuestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type GuestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
};
export type $GuestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Guest";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        event: Prisma.$EventPayload<ExtArgs>;
        rsvp: Prisma.$RsvpPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        eventId: string;
        name: string;
        phone: string | null;
        category: string | null;
        maxPax: number;
        token: string;
        createdAt: Date;
    }, ExtArgs["result"]["guest"]>;
    composites: {};
};
export type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GuestPayload, S>;
export type GuestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GuestCountAggregateInputType | true;
};
export interface GuestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Guest'];
        meta: {
            name: 'Guest';
        };
    };
    findUnique<T extends GuestFindUniqueArgs>(args: Prisma.SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GuestFindFirstArgs>(args?: Prisma.SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GuestFindManyArgs>(args?: Prisma.SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GuestCreateArgs>(args: Prisma.SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GuestCreateManyArgs>(args?: Prisma.SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GuestDeleteArgs>(args: Prisma.SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GuestUpdateArgs>(args: Prisma.SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GuestDeleteManyArgs>(args?: Prisma.SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GuestUpdateManyArgs>(args: Prisma.SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GuestUpsertArgs>(args: Prisma.SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma.Prisma__GuestClient<runtime.Types.Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GuestCountArgs>(args?: Prisma.Subset<T, GuestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GuestCountAggregateOutputType> : number>;
    aggregate<T extends GuestAggregateArgs>(args: Prisma.Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>;
    groupBy<T extends GuestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GuestGroupByArgs['orderBy'];
    } : {
        orderBy?: GuestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GuestFieldRefs;
}
export interface Prisma__GuestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rsvp<T extends Prisma.Guest$rsvpArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Guest$rsvpArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GuestFieldRefs {
    readonly id: Prisma.FieldRef<"Guest", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Guest", 'String'>;
    readonly eventId: Prisma.FieldRef<"Guest", 'String'>;
    readonly name: Prisma.FieldRef<"Guest", 'String'>;
    readonly phone: Prisma.FieldRef<"Guest", 'String'>;
    readonly category: Prisma.FieldRef<"Guest", 'String'>;
    readonly maxPax: Prisma.FieldRef<"Guest", 'Int'>;
    readonly token: Prisma.FieldRef<"Guest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Guest", 'DateTime'>;
}
export type GuestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where: Prisma.GuestWhereUniqueInput;
};
export type GuestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where: Prisma.GuestWhereUniqueInput;
};
export type GuestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where?: Prisma.GuestWhereInput;
    orderBy?: Prisma.GuestOrderByWithRelationInput | Prisma.GuestOrderByWithRelationInput[];
    cursor?: Prisma.GuestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestScalarFieldEnum | Prisma.GuestScalarFieldEnum[];
};
export type GuestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where?: Prisma.GuestWhereInput;
    orderBy?: Prisma.GuestOrderByWithRelationInput | Prisma.GuestOrderByWithRelationInput[];
    cursor?: Prisma.GuestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestScalarFieldEnum | Prisma.GuestScalarFieldEnum[];
};
export type GuestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where?: Prisma.GuestWhereInput;
    orderBy?: Prisma.GuestOrderByWithRelationInput | Prisma.GuestOrderByWithRelationInput[];
    cursor?: Prisma.GuestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GuestScalarFieldEnum | Prisma.GuestScalarFieldEnum[];
};
export type GuestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestCreateInput, Prisma.GuestUncheckedCreateInput>;
};
export type GuestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GuestCreateManyInput | Prisma.GuestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GuestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    data: Prisma.GuestCreateManyInput | Prisma.GuestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GuestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GuestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestUpdateInput, Prisma.GuestUncheckedUpdateInput>;
    where: Prisma.GuestWhereUniqueInput;
};
export type GuestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GuestUpdateManyMutationInput, Prisma.GuestUncheckedUpdateManyInput>;
    where?: Prisma.GuestWhereInput;
    limit?: number;
};
export type GuestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GuestUpdateManyMutationInput, Prisma.GuestUncheckedUpdateManyInput>;
    where?: Prisma.GuestWhereInput;
    limit?: number;
    include?: Prisma.GuestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GuestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where: Prisma.GuestWhereUniqueInput;
    create: Prisma.XOR<Prisma.GuestCreateInput, Prisma.GuestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GuestUpdateInput, Prisma.GuestUncheckedUpdateInput>;
};
export type GuestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
    where: Prisma.GuestWhereUniqueInput;
};
export type GuestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GuestWhereInput;
    limit?: number;
};
export type Guest$rsvpArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where?: Prisma.RsvpWhereInput;
};
export type GuestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GuestSelect<ExtArgs> | null;
    omit?: Prisma.GuestOmit<ExtArgs> | null;
    include?: Prisma.GuestInclude<ExtArgs> | null;
};
