"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTodo = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoCountAggregate_1 = require("../outputs/TodoCountAggregate");
const TodoMaxAggregate_1 = require("../outputs/TodoMaxAggregate");
const TodoMinAggregate_1 = require("../outputs/TodoMinAggregate");
let AggregateTodo = class AggregateTodo {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoCountAggregate_1.TodoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoCountAggregate_1.TodoCountAggregate)
], AggregateTodo.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoMinAggregate_1.TodoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoMinAggregate_1.TodoMinAggregate)
], AggregateTodo.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoMaxAggregate_1.TodoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoMaxAggregate_1.TodoMaxAggregate)
], AggregateTodo.prototype, "_max", void 0);
AggregateTodo = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTodo", {
        isAbstract: true
    })
], AggregateTodo);
exports.AggregateTodo = AggregateTodo;
