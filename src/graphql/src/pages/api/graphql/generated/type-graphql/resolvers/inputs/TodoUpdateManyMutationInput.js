"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DataUpdateEnvelopeInput_1 = require("../inputs/DataUpdateEnvelopeInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TodoUpdateManyMutationInput = class TodoUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TodoUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TodoUpdateManyMutationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TodoUpdateManyMutationInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DataUpdateEnvelopeInput_1.DataUpdateEnvelopeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DataUpdateEnvelopeInput_1.DataUpdateEnvelopeInput)
], TodoUpdateManyMutationInput.prototype, "data", void 0);
TodoUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TodoUpdateManyMutationInput", {
        isAbstract: true
    })
], TodoUpdateManyMutationInput);
exports.TodoUpdateManyMutationInput = TodoUpdateManyMutationInput;
