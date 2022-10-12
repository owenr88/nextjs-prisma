import { TodoCreateInput } from "../../../inputs/TodoCreateInput";
import { TodoUpdateInput } from "../../../inputs/TodoUpdateInput";
import { TodoWhereUniqueInput } from "../../../inputs/TodoWhereUniqueInput";
export declare class UpsertOneTodoArgs {
    where: TodoWhereUniqueInput;
    create: TodoCreateInput;
    update: TodoUpdateInput;
}
