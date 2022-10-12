"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DataUpdateInput = class DataUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DataUpdateInput.prototype, "test", void 0);
DataUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DataUpdateInput", {
        isAbstract: true
    })
], DataUpdateInput);
exports.DataUpdateInput = DataUpdateInput;
