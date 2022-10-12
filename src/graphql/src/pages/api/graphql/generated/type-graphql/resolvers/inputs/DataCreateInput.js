"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DataCreateInput = class DataCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DataCreateInput.prototype, "test", void 0);
DataCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DataCreateInput", {
        isAbstract: true
    })
], DataCreateInput);
exports.DataCreateInput = DataCreateInput;
