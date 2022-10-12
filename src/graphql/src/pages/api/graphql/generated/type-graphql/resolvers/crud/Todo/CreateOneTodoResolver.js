"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTodoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneTodoArgs_1 = require("./args/CreateOneTodoArgs");
const Todo_1 = require("../../../models/Todo");
const helpers_1 = require("../../../helpers");
let CreateOneTodoResolver = class CreateOneTodoResolver {
    async createOneTodo(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).todo.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateOneTodoResolver.prototype, "createOneTodo", null);
CreateOneTodoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Todo_1.Todo)
], CreateOneTodoResolver);
exports.CreateOneTodoResolver = CreateOneTodoResolver;
