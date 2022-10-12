import { DataOrderByInput } from "../inputs/DataOrderByInput";
export declare class TodoOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    completed?: "asc" | "desc" | undefined;
    data?: DataOrderByInput | undefined;
}
