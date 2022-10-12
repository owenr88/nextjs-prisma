import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TodoScalarWhereWithAggregatesInput {
    AND?: TodoScalarWhereWithAggregatesInput[] | undefined;
    OR?: TodoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TodoScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    text?: StringWithAggregatesFilter | undefined;
    completed?: BoolWithAggregatesFilter | undefined;
}
