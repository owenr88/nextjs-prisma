import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTodoArgs } from "./args/DeleteOneTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class DeleteOneTodoResolver {
    deleteOneTodo(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTodoArgs): Promise<Todo | null>;
}
