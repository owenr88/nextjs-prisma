"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoOrderByWithRelationInput_1 = require("../../../inputs/TodoOrderByWithRelationInput");
const TodoWhereInput_1 = require("../../../inputs/TodoWhereInput");
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
const TodoScalarFieldEnum_1 = require("../../../../enums/TodoScalarFieldEnum");
let FindFirstTodoArgs = class FindFirstTodoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoWhereInput_1.TodoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoWhereInput_1.TodoWhereInput)
], FindFirstTodoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoOrderByWithRelationInput_1.TodoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTodoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoWhereUniqueInput_1.TodoWhereUniqueInput)
], FindFirstTodoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTodoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTodoArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoScalarFieldEnum_1.TodoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTodoArgs.prototype, "distinct", void 0);
FindFirstTodoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTodoArgs);
exports.FindFirstTodoArgs = FindFirstTodoArgs;
