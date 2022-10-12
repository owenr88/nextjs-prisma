"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Data = class Data {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Data.prototype, "test", void 0);
Data = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Data", {
        isAbstract: true
    })
], Data);
exports.Data = Data;
