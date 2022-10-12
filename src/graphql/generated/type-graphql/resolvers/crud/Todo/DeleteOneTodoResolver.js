"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTodoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneTodoArgs_1 = require("./args/DeleteOneTodoArgs");
const Todo_1 = require("../../../models/Todo");
const helpers_1 = require("../../../helpers");
let DeleteOneTodoResolver = class DeleteOneTodoResolver {
    async deleteOneTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteOneTodoResolver.prototype, "deleteOneTodo", null);
DeleteOneTodoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Todo_1.Todo)
], DeleteOneTodoResolver);
exports.DeleteOneTodoResolver = DeleteOneTodoResolver;
