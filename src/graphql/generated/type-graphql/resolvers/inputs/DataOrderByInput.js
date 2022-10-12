"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataOrderByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DataOrderByInput = class DataOrderByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DataOrderByInput.prototype, "test", void 0);
DataOrderByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DataOrderByInput", {
        isAbstract: true
    })
], DataOrderByInput);
exports.DataOrderByInput = DataOrderByInput;
