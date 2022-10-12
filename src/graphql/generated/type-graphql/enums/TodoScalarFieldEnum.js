"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TodoScalarFieldEnum;
(function (TodoScalarFieldEnum) {
    TodoScalarFieldEnum["id"] = "id";
    TodoScalarFieldEnum["createdAt"] = "createdAt";
    TodoScalarFieldEnum["text"] = "text";
    TodoScalarFieldEnum["completed"] = "completed";
})(TodoScalarFieldEnum = exports.TodoScalarFieldEnum || (exports.TodoScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TodoScalarFieldEnum, {
    name: "TodoScalarFieldEnum",
    description: undefined,
});
