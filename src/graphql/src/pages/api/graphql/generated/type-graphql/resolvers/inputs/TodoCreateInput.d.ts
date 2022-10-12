import { DataCreateEnvelopeInput } from "../inputs/DataCreateEnvelopeInput";
export declare class TodoCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    text: string;
    completed: boolean;
    data: DataCreateEnvelopeInput;
}
