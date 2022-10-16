import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TodoUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    completed?: BoolFieldUpdateOperationsInput | undefined;
}
