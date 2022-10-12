"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoCreateInput_1 = require("../../../inputs/TodoCreateInput");
let CreateOneTodoArgs = class CreateOneTodoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoCreateInput_1.TodoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoCreateInput_1.TodoCreateInput)
], CreateOneTodoArgs.prototype, "data", void 0);
CreateOneTodoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTodoArgs);
exports.CreateOneTodoArgs = CreateOneTodoArgs;
