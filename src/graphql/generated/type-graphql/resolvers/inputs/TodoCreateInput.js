"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DataCreateEnvelopeInput_1 = require("../inputs/DataCreateEnvelopeInput");
let TodoCreateInput = class TodoCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TodoCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TodoCreateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoCreateInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DataCreateEnvelopeInput_1.DataCreateEnvelopeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DataCreateEnvelopeInput_1.DataCreateEnvelopeInput)
], TodoCreateInput.prototype, "data", void 0);
TodoCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TodoCreateInput", {
        isAbstract: true
    })
], TodoCreateInput);
exports.TodoCreateInput = TodoCreateInput;
