import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTodoArgs } from "./args/UpdateOneTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class UpdateOneTodoResolver {
    updateOneTodo(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTodoArgs): Promise<Todo | null>;
}
