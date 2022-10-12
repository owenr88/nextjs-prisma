import { StringFilter } from "../inputs/StringFilter";
export declare class DataWhereInput {
    AND?: DataWhereInput[] | undefined;
    OR?: DataWhereInput[] | undefined;
    NOT?: DataWhereInput[] | undefined;
    test?: StringFilter | undefined;
}
