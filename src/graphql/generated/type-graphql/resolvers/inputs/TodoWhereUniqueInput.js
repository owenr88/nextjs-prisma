"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TodoWhereUniqueInput = class TodoWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoWhereUniqueInput.prototype, "id", void 0);
TodoWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TodoWhereUniqueInput", {
        isAbstract: true
    })
], TodoWhereUniqueInput);
exports.TodoWhereUniqueInput = TodoWhereUniqueInput;
