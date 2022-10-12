"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCreateEnvelopeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DataCreateInput_1 = require("../inputs/DataCreateInput");
let DataCreateEnvelopeInput = class DataCreateEnvelopeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DataCreateInput_1.DataCreateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DataCreateInput_1.DataCreateInput)
], DataCreateEnvelopeInput.prototype, "set", void 0);
DataCreateEnvelopeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DataCreateEnvelopeInput", {
        isAbstract: true
    })
], DataCreateEnvelopeInput);
exports.DataCreateEnvelopeInput = DataCreateEnvelopeInput;
