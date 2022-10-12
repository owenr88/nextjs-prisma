"use strict";
var TodoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DataCompositeFilter_1 = require("../inputs/DataCompositeFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let TodoWhereInput = TodoWhereInput_1 = class TodoWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TodoWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TodoWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TodoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TodoWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TodoWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TodoWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TodoWhereInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], TodoWhereInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DataCompositeFilter_1.DataCompositeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DataCompositeFilter_1.DataCompositeFilter)
], TodoWhereInput.prototype, "data", void 0);
TodoWhereInput = TodoWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TodoWhereInput", {
        isAbstract: true
    })
], TodoWhereInput);
exports.TodoWhereInput = TodoWhereInput;
