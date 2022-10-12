"use strict";
var DataWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
let DataWhereInput = DataWhereInput_1 = class DataWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DataWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DataWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DataWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DataWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DataWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DataWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DataWhereInput.prototype, "test", void 0);
DataWhereInput = DataWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DataWhereInput", {
        isAbstract: true
    })
], DataWhereInput);
exports.DataWhereInput = DataWhereInput;
