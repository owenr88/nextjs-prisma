"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoCreateInput_1 = require("../../../inputs/TodoCreateInput");
const TodoUpdateInput_1 = require("../../../inputs/TodoUpdateInput");
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
let UpsertOneTodoArgs = class UpsertOneTodoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoWhereUniqueInput_1.TodoWhereUniqueInput)
], UpsertOneTodoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoCreateInput_1.TodoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoCreateInput_1.TodoCreateInput)
], UpsertOneTodoArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoUpdateInput_1.TodoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoUpdateInput_1.TodoUpdateInput)
], UpsertOneTodoArgs.prototype, "update", void 0);
UpsertOneTodoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTodoArgs);
exports.UpsertOneTodoArgs = UpsertOneTodoArgs;
