"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoCreateManyInput_1 = require("../../../inputs/TodoCreateManyInput");
let CreateManyTodoArgs = class CreateManyTodoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoCreateManyInput_1.TodoCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTodoArgs.prototype, "data", void 0);
CreateManyTodoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTodoArgs);
exports.CreateManyTodoArgs = CreateManyTodoArgs;
