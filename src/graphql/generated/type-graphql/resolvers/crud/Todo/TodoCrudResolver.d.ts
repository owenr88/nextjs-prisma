import { GraphQLResolveInfo } from "graphql";
import { AggregateTodoArgs } from "./args/AggregateTodoArgs";
import { CreateManyTodoArgs } from "./args/CreateManyTodoArgs";
import { CreateOneTodoArgs } from "./args/CreateOneTodoArgs";
import { DeleteManyTodoArgs } from "./args/DeleteManyTodoArgs";
import { DeleteOneTodoArgs } from "./args/DeleteOneTodoArgs";
import { FindFirstTodoArgs } from "./args/FindFirstTodoArgs";
import { FindManyTodoArgs } from "./args/FindManyTodoArgs";
import { FindUniqueTodoArgs } from "./args/FindUniqueTodoArgs";
import { GroupByTodoArgs } from "./args/GroupByTodoArgs";
import { UpdateManyTodoArgs } from "./args/UpdateManyTodoArgs";
import { UpdateOneTodoArgs } from "./args/UpdateOneTodoArgs";
import { UpsertOneTodoArgs } from "./args/UpsertOneTodoArgs";
import { Todo } from "../../../models/Todo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTodo } from "../../outputs/AggregateTodo";
import { TodoGroupBy } from "../../outputs/TodoGroupBy";
export declare class TodoCrudResolver {
    aggregateTodo(ctx: any, info: GraphQLResolveInfo, args: AggregateTodoArgs): Promise<AggregateTodo>;
    createManyTodo(ctx: any, info: GraphQLResolveInfo, args: CreateManyTodoArgs): Promise<AffectedRowsOutput>;
    createOneTodo(ctx: any, info: GraphQLResolveInfo, args: CreateOneTodoArgs): Promise<Todo>;
    deleteManyTodo(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTodoArgs): Promise<AffectedRowsOutput>;
    deleteOneTodo(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTodoArgs): Promise<Todo | null>;
    findFirstTodo(ctx: any, info: GraphQLResolveInfo, args: FindFirstTodoArgs): Promise<Todo | null>;
    todos(ctx: any, info: GraphQLResolveInfo, args: FindManyTodoArgs): Promise<Todo[]>;
    todo(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTodoArgs): Promise<Todo | null>;
    groupByTodo(ctx: any, info: GraphQLResolveInfo, args: GroupByTodoArgs): Promise<TodoGroupBy[]>;
    updateManyTodo(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTodoArgs): Promise<AffectedRowsOutput>;
    updateOneTodo(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTodoArgs): Promise<Todo | null>;
    upsertOneTodo(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTodoArgs): Promise<Todo>;
}
