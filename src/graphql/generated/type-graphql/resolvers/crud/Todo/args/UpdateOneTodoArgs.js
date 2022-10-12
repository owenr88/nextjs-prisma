"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTodoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoUpdateInput_1 = require("../../../inputs/TodoUpdateInput");
const TodoWhereUniqueInput_1 = require("../../../inputs/TodoWhereUniqueInput");
let UpdateOneTodoArgs = class UpdateOneTodoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoUpdateInput_1.TodoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoUpdateInput_1.TodoUpdateInput)
], UpdateOneTodoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoWhereUniqueInput_1.TodoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TodoWhereUniqueInput_1.TodoWhereUniqueInput)
], UpdateOneTodoArgs.prototype, "where", void 0);
UpdateOneTodoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTodoArgs);
exports.UpdateOneTodoArgs = UpdateOneTodoArgs;
