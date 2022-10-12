"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTodoArgs_1 = require("./args/AggregateTodoArgs");
const CreateManyTodoArgs_1 = require("./args/CreateManyTodoArgs");
const CreateOneTodoArgs_1 = require("./args/CreateOneTodoArgs");
const DeleteManyTodoArgs_1 = require("./args/DeleteManyTodoArgs");
const DeleteOneTodoArgs_1 = require("./args/DeleteOneTodoArgs");
const FindFirstTodoArgs_1 = require("./args/FindFirstTodoArgs");
const FindManyTodoArgs_1 = require("./args/FindManyTodoArgs");
const FindUniqueTodoArgs_1 = require("./args/FindUniqueTodoArgs");
const GroupByTodoArgs_1 = require("./args/GroupByTodoArgs");
const UpdateManyTodoArgs_1 = require("./args/UpdateManyTodoArgs");
const UpdateOneTodoArgs_1 = require("./args/UpdateOneTodoArgs");
const UpsertOneTodoArgs_1 = require("./args/UpsertOneTodoArgs");
const helpers_1 = require("../../../helpers");
const Todo_1 = require("../../../models/Todo");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTodo_1 = require("../../outputs/AggregateTodo");
const TodoGroupBy_1 = require("../../outputs/TodoGroupBy");
let TodoCrudResolver = class TodoCrudResolver {
    async aggregateTodo(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async todos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async todo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTodo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTodo_1.AggregateTodo, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTodoArgs_1.AggregateTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "aggregateTodo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTodoArgs_1.CreateManyTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "createManyTodo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTodoArgs_1.CreateOneTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "createOneTodo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTodoArgs_1.DeleteManyTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "deleteManyTodo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTodoArgs_1.DeleteOneTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "deleteOneTodo", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Todo_1.Todo, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTodoArgs_1.FindFirstTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "findFirstTodo", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Todo_1.Todo], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTodoArgs_1.FindManyTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "todos", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Todo_1.Todo, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTodoArgs_1.FindUniqueTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "todo", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TodoGroupBy_1.TodoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTodoArgs_1.GroupByTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "groupByTodo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTodoArgs_1.UpdateManyTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "updateManyTodo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTodoArgs_1.UpdateOneTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "updateOneTodo", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Todo_1.Todo, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTodoArgs_1.UpsertOneTodoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoCrudResolver.prototype, "upsertOneTodo", null);
TodoCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Todo_1.Todo)
], TodoCrudResolver);
exports.TodoCrudResolver = TodoCrudResolver;
