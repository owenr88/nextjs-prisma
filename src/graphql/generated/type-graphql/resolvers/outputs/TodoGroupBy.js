"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TodoCountAggregate_1 = require("../outputs/TodoCountAggregate");
const TodoMaxAggregate_1 = require("../outputs/TodoMaxAggregate");
const TodoMinAggregate_1 = require("../outputs/TodoMinAggregate");
let TodoGroupBy = class TodoGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TodoGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TodoGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TodoGroupBy.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoGroupBy.prototype, "completed", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoCountAggregate_1.TodoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoCountAggregate_1.TodoCountAggregate)
], TodoGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoMinAggregate_1.TodoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoMinAggregate_1.TodoMinAggregate)
], TodoGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TodoMaxAggregate_1.TodoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TodoMaxAggregate_1.TodoMaxAggregate)
], TodoGroupBy.prototype, "_max", void 0);
TodoGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TodoGroupBy", {
        isAbstract: true
    })
], TodoGroupBy);
exports.TodoGroupBy = TodoGroupBy;
