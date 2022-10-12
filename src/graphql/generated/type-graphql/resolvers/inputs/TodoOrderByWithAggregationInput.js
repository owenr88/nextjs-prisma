"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoCountOrderByAggregateInput_1 = require("../inputs/TodoCountOrderByAggregateInput");
const TodoMaxOrderByAggregateInput_1 = require("../inputs/TodoMaxOrderByAggregateInput");
const TodoMinOrderByAggregateInput_1 = require("../inputs/TodoMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TodoOrderByWithAggregationInput = class TodoOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoOrderByWithAggregationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoOrderByWithAggregationInput.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoCountOrderByAggregateInput_1.TodoCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoCountOrderByAggregateInput_1.TodoCountOrderByAggregateInput)
], TodoOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoMaxOrderByAggregateInput_1.TodoMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoMaxOrderByAggregateInput_1.TodoMaxOrderByAggregateInput)
], TodoOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoMinOrderByAggregateInput_1.TodoMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoMinOrderByAggregateInput_1.TodoMinOrderByAggregateInput)
], TodoOrderByWithAggregationInput.prototype, "_min", void 0);
TodoOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TodoOrderByWithAggregationInput", {
        isAbstract: true
    })
], TodoOrderByWithAggregationInput);
exports.TodoOrderByWithAggregationInput = TodoOrderByWithAggregationInput;
