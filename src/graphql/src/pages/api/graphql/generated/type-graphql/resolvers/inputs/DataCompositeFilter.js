"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCompositeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DataObjectEqualityInput_1 = require("../inputs/DataObjectEqualityInput");
const DataWhereInput_1 = require("../inputs/DataWhereInput");
let DataCompositeFilter = class DataCompositeFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DataObjectEqualityInput_1.DataObjectEqualityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DataObjectEqualityInput_1.DataObjectEqualityInput)
], DataCompositeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DataWhereInput_1.DataWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DataWhereInput_1.DataWhereInput)
], DataCompositeFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DataWhereInput_1.DataWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DataWhereInput_1.DataWhereInput)
], DataCompositeFilter.prototype, "isNot", void 0);
DataCompositeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DataCompositeFilter", {
        isAbstract: true
    })
], DataCompositeFilter);
exports.DataCompositeFilter = DataCompositeFilter;
