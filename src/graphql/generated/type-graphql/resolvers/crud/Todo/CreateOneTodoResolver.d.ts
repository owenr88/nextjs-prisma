import { GraphQLResolveInfo } from "graphql";
import { CreateOneTodoArgs } from "./args/CreateOneTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class CreateOneTodoResolver {
    createOneTodo(ctx: any, info: GraphQLResolveInfo, args: CreateOneTodoArgs): Promise<Todo>;
}
