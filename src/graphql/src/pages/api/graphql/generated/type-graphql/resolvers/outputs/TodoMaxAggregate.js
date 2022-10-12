"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TodoMaxAggregate = class TodoMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TodoMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TodoMaxAggregate.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TodoMaxAggregate.prototype, "completed", void 0);
TodoMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TodoMaxAggregate", {
        isAbstract: true
    })
], TodoMaxAggregate);
exports.TodoMaxAggregate = TodoMaxAggregate;
