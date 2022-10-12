import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTodoArgs } from "./args/UpsertOneTodoArgs";
import { Todo } from "../../../models/Todo";
export declare class UpsertOneTodoResolver {
    upsertOneTodo(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTodoArgs): Promise<Todo>;
}
