"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
let FindUniqueTodoArgs = class FindUniqueTodoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoWhereUniqueInput_1.TodoWhereUniqueInput)
], FindUniqueTodoArgs.prototype, "where", void 0);
FindUniqueTodoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTodoArgs);
exports.FindUniqueTodoArgs = FindUniqueTodoArgs;
