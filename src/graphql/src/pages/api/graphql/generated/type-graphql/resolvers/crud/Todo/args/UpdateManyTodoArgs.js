"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoUpdateManyMutationInput_1 = require("../../../inputs/TodoUpdateManyMutationInput");
const TodoWhereInput_1 = require("../../../inputs/TodoWhereInput");
let UpdateManyTodoArgs = class UpdateManyTodoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoUpdateManyMutationInput_1.TodoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoUpdateManyMutationInput_1.TodoUpdateManyMutationInput)
], UpdateManyTodoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoWhereInput_1.TodoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoWhereInput_1.TodoWhereInput)
], UpdateManyTodoArgs.prototype, "where", void 0);
UpdateManyTodoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTodoArgs);
exports.UpdateManyTodoArgs = UpdateManyTodoArgs;
