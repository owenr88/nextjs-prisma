import { TodoCountAggregate } from "../outputs/TodoCountAggregate";
import { TodoMaxAggregate } from "../outputs/TodoMaxAggregate";
import { TodoMinAggregate } from "../outputs/TodoMinAggregate";
export declare class AggregateTodo {
    _count: TodoCountAggregate | null;
    _min: TodoMinAggregate | null;
    _max: TodoMaxAggregate | null;
}
