"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataUpdateEnvelopeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DataCreateInput_1 = require("../inputs/DataCreateInput");
const DataUpdateInput_1 = require("../inputs/DataUpdateInput");
let DataUpdateEnvelopeInput = class DataUpdateEnvelopeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DataCreateInput_1.DataCreateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DataCreateInput_1.DataCreateInput)
], DataUpdateEnvelopeInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DataUpdateInput_1.DataUpdateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DataUpdateInput_1.DataUpdateInput)
], DataUpdateEnvelopeInput.prototype, "update", void 0);
DataUpdateEnvelopeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DataUpdateEnvelopeInput", {
        isAbstract: true
    })
], DataUpdateEnvelopeInput);
exports.DataUpdateEnvelopeInput = DataUpdateEnvelopeInput;
