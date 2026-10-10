import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RsvpModel = runtime.Types.Result.DefaultSelection<Prisma.$RsvpPayload>;
export type AggregateRsvp = {
    _count: RsvpCountAggregateOutputType | null;
    _avg: RsvpAvgAggregateOutputType | null;
    _sum: RsvpSumAggregateOutputType | null;
    _min: RsvpMinAggregateOutputType | null;
    _max: RsvpMaxAggregateOutputType | null;
};
export type RsvpAvgAggregateOutputType = {
    paxCount: number | null;
};
export type RsvpSumAggregateOutputType = {
    paxCount: number | null;
};
export type RsvpMinAggregateOutputType = {
    id: string | null;
    invitationId: string | null;
    status: $Enums.RsvpStatus | null;
    paxCount: number | null;
    message: string | null;
    respondedAt: Date | null;
};
export type RsvpMaxAggregateOutputType = {
    id: string | null;
    invitationId: string | null;
    status: $Enums.RsvpStatus | null;
    paxCount: number | null;
    message: string | null;
    respondedAt: Date | null;
};
export type RsvpCountAggregateOutputType = {
    id: number;
    invitationId: number;
    status: number;
    paxCount: number;
    message: number;
    respondedAt: number;
    _all: number;
};
export type RsvpAvgAggregateInputType = {
    paxCount?: true;
};
export type RsvpSumAggregateInputType = {
    paxCount?: true;
};
export type RsvpMinAggregateInputType = {
    id?: true;
    invitationId?: true;
    status?: true;
    paxCount?: true;
    message?: true;
    respondedAt?: true;
};
export type RsvpMaxAggregateInputType = {
    id?: true;
    invitationId?: true;
    status?: true;
    paxCount?: true;
    message?: true;
    respondedAt?: true;
};
export type RsvpCountAggregateInputType = {
    id?: true;
    invitationId?: true;
    status?: true;
    paxCount?: true;
    message?: true;
    respondedAt?: true;
    _all?: true;
};
export type RsvpAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpWhereInput;
    orderBy?: Prisma.RsvpOrderByWithRelationInput | Prisma.RsvpOrderByWithRelationInput[];
    cursor?: Prisma.RsvpWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RsvpCountAggregateInputType;
    _avg?: RsvpAvgAggregateInputType;
    _sum?: RsvpSumAggregateInputType;
    _min?: RsvpMinAggregateInputType;
    _max?: RsvpMaxAggregateInputType;
};
export type GetRsvpAggregateType<T extends RsvpAggregateArgs> = {
    [P in keyof T & keyof AggregateRsvp]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRsvp[P]> : Prisma.GetScalarType<T[P], AggregateRsvp[P]>;
};
export type RsvpGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpWhereInput;
    orderBy?: Prisma.RsvpOrderByWithAggregationInput | Prisma.RsvpOrderByWithAggregationInput[];
    by: Prisma.RsvpScalarFieldEnum[] | Prisma.RsvpScalarFieldEnum;
    having?: Prisma.RsvpScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RsvpCountAggregateInputType | true;
    _avg?: RsvpAvgAggregateInputType;
    _sum?: RsvpSumAggregateInputType;
    _min?: RsvpMinAggregateInputType;
    _max?: RsvpMaxAggregateInputType;
};
export type RsvpGroupByOutputType = {
    id: string;
    invitationId: string;
    status: $Enums.RsvpStatus;
    paxCount: number;
    message: string | null;
    respondedAt: Date;
    _count: RsvpCountAggregateOutputType | null;
    _avg: RsvpAvgAggregateOutputType | null;
    _sum: RsvpSumAggregateOutputType | null;
    _min: RsvpMinAggregateOutputType | null;
    _max: RsvpMaxAggregateOutputType | null;
};
export type GetRsvpGroupByPayload<T extends RsvpGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RsvpGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RsvpGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RsvpGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RsvpGroupByOutputType[P]>;
}>>;
export type RsvpWhereInput = {
    AND?: Prisma.RsvpWhereInput | Prisma.RsvpWhereInput[];
    OR?: Prisma.RsvpWhereInput[];
    NOT?: Prisma.RsvpWhereInput | Prisma.RsvpWhereInput[];
    id?: Prisma.StringFilter<"Rsvp"> | string;
    invitationId?: Prisma.StringFilter<"Rsvp"> | string;
    status?: Prisma.EnumRsvpStatusFilter<"Rsvp"> | $Enums.RsvpStatus;
    paxCount?: Prisma.IntFilter<"Rsvp"> | number;
    message?: Prisma.StringNullableFilter<"Rsvp"> | string | null;
    respondedAt?: Prisma.DateTimeFilter<"Rsvp"> | Date | string;
    invitation?: Prisma.XOR<Prisma.InvitationScalarRelationFilter, Prisma.InvitationWhereInput>;
};
export type RsvpOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paxCount?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    invitation?: Prisma.InvitationOrderByWithRelationInput;
};
export type RsvpWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    invitationId?: string;
    AND?: Prisma.RsvpWhereInput | Prisma.RsvpWhereInput[];
    OR?: Prisma.RsvpWhereInput[];
    NOT?: Prisma.RsvpWhereInput | Prisma.RsvpWhereInput[];
    status?: Prisma.EnumRsvpStatusFilter<"Rsvp"> | $Enums.RsvpStatus;
    paxCount?: Prisma.IntFilter<"Rsvp"> | number;
    message?: Prisma.StringNullableFilter<"Rsvp"> | string | null;
    respondedAt?: Prisma.DateTimeFilter<"Rsvp"> | Date | string;
    invitation?: Prisma.XOR<Prisma.InvitationScalarRelationFilter, Prisma.InvitationWhereInput>;
}, "id" | "invitationId">;
export type RsvpOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paxCount?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    _count?: Prisma.RsvpCountOrderByAggregateInput;
    _avg?: Prisma.RsvpAvgOrderByAggregateInput;
    _max?: Prisma.RsvpMaxOrderByAggregateInput;
    _min?: Prisma.RsvpMinOrderByAggregateInput;
    _sum?: Prisma.RsvpSumOrderByAggregateInput;
};
export type RsvpScalarWhereWithAggregatesInput = {
    AND?: Prisma.RsvpScalarWhereWithAggregatesInput | Prisma.RsvpScalarWhereWithAggregatesInput[];
    OR?: Prisma.RsvpScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RsvpScalarWhereWithAggregatesInput | Prisma.RsvpScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Rsvp"> | string;
    invitationId?: Prisma.StringWithAggregatesFilter<"Rsvp"> | string;
    status?: Prisma.EnumRsvpStatusWithAggregatesFilter<"Rsvp"> | $Enums.RsvpStatus;
    paxCount?: Prisma.IntWithAggregatesFilter<"Rsvp"> | number;
    message?: Prisma.StringNullableWithAggregatesFilter<"Rsvp"> | string | null;
    respondedAt?: Prisma.DateTimeWithAggregatesFilter<"Rsvp"> | Date | string;
};
export type RsvpCreateInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    paxCount?: number;
    message?: string | null;
    respondedAt?: Date | string;
    invitation: Prisma.InvitationCreateNestedOneWithoutRsvpInput;
};
export type RsvpUncheckedCreateInput = {
    id?: string;
    invitationId: string;
    status: $Enums.RsvpStatus;
    paxCount?: number;
    message?: string | null;
    respondedAt?: Date | string;
};
export type RsvpUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invitation?: Prisma.InvitationUpdateOneRequiredWithoutRsvpNestedInput;
};
export type RsvpUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpCreateManyInput = {
    id?: string;
    invitationId: string;
    status: $Enums.RsvpStatus;
    paxCount?: number;
    message?: string | null;
    respondedAt?: Date | string;
};
export type RsvpUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invitationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpNullableScalarRelationFilter = {
    is?: Prisma.RsvpWhereInput | null;
    isNot?: Prisma.RsvpWhereInput | null;
};
export type RsvpCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paxCount?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
};
export type RsvpAvgOrderByAggregateInput = {
    paxCount?: Prisma.SortOrder;
};
export type RsvpMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paxCount?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
};
export type RsvpMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    invitationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paxCount?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
};
export type RsvpSumOrderByAggregateInput = {
    paxCount?: Prisma.SortOrder;
};
export type RsvpCreateNestedOneWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutInvitationInput;
    connect?: Prisma.RsvpWhereUniqueInput;
};
export type RsvpUncheckedCreateNestedOneWithoutInvitationInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutInvitationInput;
    connect?: Prisma.RsvpWhereUniqueInput;
};
export type RsvpUpdateOneWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutInvitationInput;
    upsert?: Prisma.RsvpUpsertWithoutInvitationInput;
    disconnect?: Prisma.RsvpWhereInput | boolean;
    delete?: Prisma.RsvpWhereInput | boolean;
    connect?: Prisma.RsvpWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RsvpUpdateToOneWithWhereWithoutInvitationInput, Prisma.RsvpUpdateWithoutInvitationInput>, Prisma.RsvpUncheckedUpdateWithoutInvitationInput>;
};
export type RsvpUncheckedUpdateOneWithoutInvitationNestedInput = {
    create?: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
    connectOrCreate?: Prisma.RsvpCreateOrConnectWithoutInvitationInput;
    upsert?: Prisma.RsvpUpsertWithoutInvitationInput;
    disconnect?: Prisma.RsvpWhereInput | boolean;
    delete?: Prisma.RsvpWhereInput | boolean;
    connect?: Prisma.RsvpWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RsvpUpdateToOneWithWhereWithoutInvitationInput, Prisma.RsvpUpdateWithoutInvitationInput>, Prisma.RsvpUncheckedUpdateWithoutInvitationInput>;
};
export type EnumRsvpStatusFieldUpdateOperationsInput = {
    set?: $Enums.RsvpStatus;
};
export type RsvpCreateWithoutInvitationInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    paxCount?: number;
    message?: string | null;
    respondedAt?: Date | string;
};
export type RsvpUncheckedCreateWithoutInvitationInput = {
    id?: string;
    status: $Enums.RsvpStatus;
    paxCount?: number;
    message?: string | null;
    respondedAt?: Date | string;
};
export type RsvpCreateOrConnectWithoutInvitationInput = {
    where: Prisma.RsvpWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
};
export type RsvpUpsertWithoutInvitationInput = {
    update: Prisma.XOR<Prisma.RsvpUpdateWithoutInvitationInput, Prisma.RsvpUncheckedUpdateWithoutInvitationInput>;
    create: Prisma.XOR<Prisma.RsvpCreateWithoutInvitationInput, Prisma.RsvpUncheckedCreateWithoutInvitationInput>;
    where?: Prisma.RsvpWhereInput;
};
export type RsvpUpdateToOneWithWhereWithoutInvitationInput = {
    where?: Prisma.RsvpWhereInput;
    data: Prisma.XOR<Prisma.RsvpUpdateWithoutInvitationInput, Prisma.RsvpUncheckedUpdateWithoutInvitationInput>;
};
export type RsvpUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpUncheckedUpdateWithoutInvitationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRsvpStatusFieldUpdateOperationsInput | $Enums.RsvpStatus;
    paxCount?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respondedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RsvpSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invitationId?: boolean;
    status?: boolean;
    paxCount?: boolean;
    message?: boolean;
    respondedAt?: boolean;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rsvp"]>;
export type RsvpSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invitationId?: boolean;
    status?: boolean;
    paxCount?: boolean;
    message?: boolean;
    respondedAt?: boolean;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rsvp"]>;
export type RsvpSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    invitationId?: boolean;
    status?: boolean;
    paxCount?: boolean;
    message?: boolean;
    respondedAt?: boolean;
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rsvp"]>;
export type RsvpSelectScalar = {
    id?: boolean;
    invitationId?: boolean;
    status?: boolean;
    paxCount?: boolean;
    message?: boolean;
    respondedAt?: boolean;
};
export type RsvpOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "invitationId" | "status" | "paxCount" | "message" | "respondedAt", ExtArgs["result"]["rsvp"]>;
export type RsvpInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
};
export type RsvpIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
};
export type RsvpIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invitation?: boolean | Prisma.InvitationDefaultArgs<ExtArgs>;
};
export type $RsvpPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rsvp";
    objects: {
        invitation: Prisma.$InvitationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        invitationId: string;
        status: $Enums.RsvpStatus;
        paxCount: number;
        message: string | null;
        respondedAt: Date;
    }, ExtArgs["result"]["rsvp"]>;
    composites: {};
};
export type RsvpGetPayload<S extends boolean | null | undefined | RsvpDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RsvpPayload, S>;
export type RsvpCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RsvpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RsvpCountAggregateInputType | true;
};
export interface RsvpDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rsvp'];
        meta: {
            name: 'Rsvp';
        };
    };
    findUnique<T extends RsvpFindUniqueArgs>(args: Prisma.SelectSubset<T, RsvpFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RsvpFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RsvpFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RsvpFindFirstArgs>(args?: Prisma.SelectSubset<T, RsvpFindFirstArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RsvpFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RsvpFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RsvpFindManyArgs>(args?: Prisma.SelectSubset<T, RsvpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RsvpCreateArgs>(args: Prisma.SelectSubset<T, RsvpCreateArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RsvpCreateManyArgs>(args?: Prisma.SelectSubset<T, RsvpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RsvpCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RsvpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RsvpDeleteArgs>(args: Prisma.SelectSubset<T, RsvpDeleteArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RsvpUpdateArgs>(args: Prisma.SelectSubset<T, RsvpUpdateArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RsvpDeleteManyArgs>(args?: Prisma.SelectSubset<T, RsvpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RsvpUpdateManyArgs>(args: Prisma.SelectSubset<T, RsvpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RsvpUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RsvpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RsvpUpsertArgs>(args: Prisma.SelectSubset<T, RsvpUpsertArgs<ExtArgs>>): Prisma.Prisma__RsvpClient<runtime.Types.Result.GetResult<Prisma.$RsvpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RsvpCountArgs>(args?: Prisma.Subset<T, RsvpCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RsvpCountAggregateOutputType> : number>;
    aggregate<T extends RsvpAggregateArgs>(args: Prisma.Subset<T, RsvpAggregateArgs>): Prisma.PrismaPromise<GetRsvpAggregateType<T>>;
    groupBy<T extends RsvpGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RsvpGroupByArgs['orderBy'];
    } : {
        orderBy?: RsvpGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RsvpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRsvpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RsvpFieldRefs;
}
export interface Prisma__RsvpClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    invitation<T extends Prisma.InvitationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvitationDefaultArgs<ExtArgs>>): Prisma.Prisma__InvitationClient<runtime.Types.Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RsvpFieldRefs {
    readonly id: Prisma.FieldRef<"Rsvp", 'String'>;
    readonly invitationId: Prisma.FieldRef<"Rsvp", 'String'>;
    readonly status: Prisma.FieldRef<"Rsvp", 'RsvpStatus'>;
    readonly paxCount: Prisma.FieldRef<"Rsvp", 'Int'>;
    readonly message: Prisma.FieldRef<"Rsvp", 'String'>;
    readonly respondedAt: Prisma.FieldRef<"Rsvp", 'DateTime'>;
}
export type RsvpFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where: Prisma.RsvpWhereUniqueInput;
};
export type RsvpFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where: Prisma.RsvpWhereUniqueInput;
};
export type RsvpFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where?: Prisma.RsvpWhereInput;
    orderBy?: Prisma.RsvpOrderByWithRelationInput | Prisma.RsvpOrderByWithRelationInput[];
    cursor?: Prisma.RsvpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RsvpScalarFieldEnum | Prisma.RsvpScalarFieldEnum[];
};
export type RsvpFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where?: Prisma.RsvpWhereInput;
    orderBy?: Prisma.RsvpOrderByWithRelationInput | Prisma.RsvpOrderByWithRelationInput[];
    cursor?: Prisma.RsvpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RsvpScalarFieldEnum | Prisma.RsvpScalarFieldEnum[];
};
export type RsvpFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where?: Prisma.RsvpWhereInput;
    orderBy?: Prisma.RsvpOrderByWithRelationInput | Prisma.RsvpOrderByWithRelationInput[];
    cursor?: Prisma.RsvpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RsvpScalarFieldEnum | Prisma.RsvpScalarFieldEnum[];
};
export type RsvpCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpCreateInput, Prisma.RsvpUncheckedCreateInput>;
};
export type RsvpCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RsvpCreateManyInput | Prisma.RsvpCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RsvpCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    data: Prisma.RsvpCreateManyInput | Prisma.RsvpCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RsvpIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RsvpUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpUpdateInput, Prisma.RsvpUncheckedUpdateInput>;
    where: Prisma.RsvpWhereUniqueInput;
};
export type RsvpUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RsvpUpdateManyMutationInput, Prisma.RsvpUncheckedUpdateManyInput>;
    where?: Prisma.RsvpWhereInput;
    limit?: number;
};
export type RsvpUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RsvpUpdateManyMutationInput, Prisma.RsvpUncheckedUpdateManyInput>;
    where?: Prisma.RsvpWhereInput;
    limit?: number;
    include?: Prisma.RsvpIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RsvpUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where: Prisma.RsvpWhereUniqueInput;
    create: Prisma.XOR<Prisma.RsvpCreateInput, Prisma.RsvpUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RsvpUpdateInput, Prisma.RsvpUncheckedUpdateInput>;
};
export type RsvpDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
    where: Prisma.RsvpWhereUniqueInput;
};
export type RsvpDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RsvpWhereInput;
    limit?: number;
};
export type RsvpDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RsvpSelect<ExtArgs> | null;
    omit?: Prisma.RsvpOmit<ExtArgs> | null;
    include?: Prisma.RsvpInclude<ExtArgs> | null;
};
