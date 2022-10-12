"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTodoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTodoArgs_1 = require("./args/GroupByTodoArgs");
const Todo_1 = require("../../../models/Todo");
const TodoGroupBy_1 = require("../../outputs/TodoGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTodoResolver = class GroupByTodoResolver {
    async groupByTodo(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByTodoResolver.prototype, "groupByTodo", null);
GroupByTodoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Todo_1.Todo)
], GroupByTodoResolver);
exports.GroupByTodoResolver = GroupByTodoResolver;
