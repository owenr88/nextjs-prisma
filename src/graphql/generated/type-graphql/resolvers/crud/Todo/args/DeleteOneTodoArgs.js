"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
let DeleteOneTodoArgs = class DeleteOneTodoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoWhereUniqueInput_1.TodoWhereUniqueInput)
], DeleteOneTodoArgs.prototype, "where", void 0);
DeleteOneTodoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTodoArgs);
exports.DeleteOneTodoArgs = DeleteOneTodoArgs;
