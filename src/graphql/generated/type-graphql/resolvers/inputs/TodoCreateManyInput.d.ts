import { DataCreateEnvelopeInput } from "../inputs/DataCreateEnvelopeInput";
export declare class TodoCreateManyInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    text: string;
    completed: boolean;
    data: DataCreateEnvelopeInput;
}
