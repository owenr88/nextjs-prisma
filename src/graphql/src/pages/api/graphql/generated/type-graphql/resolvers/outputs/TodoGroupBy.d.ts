import { TodoCountAggregate } from "../outputs/TodoCountAggregate";
import { TodoMaxAggregate } from "../outputs/TodoMaxAggregate";
import { TodoMinAggregate } from "../outputs/TodoMinAggregate";
export declare class TodoGroupBy {
    id: string;
    createdAt: Date;
    text: string;
    completed: boolean;
    _count: TodoCountAggregate | null;
    _min: TodoMinAggregate | null;
    _max: TodoMaxAggregate | null;
}
