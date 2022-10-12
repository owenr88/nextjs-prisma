import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TodoWhereInput {
    AND?: TodoWhereInput[] | undefined;
    OR?: TodoWhereInput[] | undefined;
    NOT?: TodoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    text?: StringFilter | undefined;
    completed?: BoolFilter | undefined;
}
