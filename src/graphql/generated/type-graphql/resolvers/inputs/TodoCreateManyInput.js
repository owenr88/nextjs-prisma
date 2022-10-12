"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TodoCreateManyInput = class TodoCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TodoCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TodoCreateManyInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoCreateManyInput.prototype, "completed", void 0);
TodoCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TodoCreateManyInput", {
        isAbstract: true
    })
], TodoCreateManyInput);
exports.TodoCreateManyInput = TodoCreateManyInput;
