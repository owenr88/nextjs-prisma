"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataObjectEqualityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DataObjectEqualityInput = class DataObjectEqualityInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DataObjectEqualityInput.prototype, "test", void 0);
DataObjectEqualityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DataObjectEqualityInput", {
        isAbstract: true
    })
], DataObjectEqualityInput);
exports.DataObjectEqualityInput = DataObjectEqualityInput;
