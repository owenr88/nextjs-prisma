import { DataObjectEqualityInput } from "../inputs/DataObjectEqualityInput";
import { DataWhereInput } from "../inputs/DataWhereInput";
export declare class DataCompositeFilter {
    equals?: DataObjectEqualityInput | undefined;
    is?: DataWhereInput | undefined;
    isNot?: DataWhereInput | undefined;
}
