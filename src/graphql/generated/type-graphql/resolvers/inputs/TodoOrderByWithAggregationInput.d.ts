import { TodoCountOrderByAggregateInput } from "../inputs/TodoCountOrderByAggregateInput";
import { TodoMaxOrderByAggregateInput } from "../inputs/TodoMaxOrderByAggregateInput";
import { TodoMinOrderByAggregateInput } from "../inputs/TodoMinOrderByAggregateInput";
export declare class TodoOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    completed?: "asc" | "desc" | undefined;
    _count?: TodoCountOrderByAggregateInput | undefined;
    _max?: TodoMaxOrderByAggregateInput | undefined;
    _min?: TodoMinOrderByAggregateInput | undefined;
}
