"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Todo: crudResolvers.TodoCrudResolver
};
const actionResolversMap = {
    Todo: {
        aggregateTodo: actionResolvers.AggregateTodoResolver,
        createManyTodo: actionResolvers.CreateManyTodoResolver,
        createOneTodo: actionResolvers.CreateOneTodoResolver,
        deleteManyTodo: actionResolvers.DeleteManyTodoResolver,
        deleteOneTodo: actionResolvers.DeleteOneTodoResolver,
        findFirstTodo: actionResolvers.FindFirstTodoResolver,
        todos: actionResolvers.FindManyTodoResolver,
        todo: actionResolvers.FindUniqueTodoResolver,
        groupByTodo: actionResolvers.GroupByTodoResolver,
        updateManyTodo: actionResolvers.UpdateManyTodoResolver,
        updateOneTodo: actionResolvers.UpdateOneTodoResolver,
        upsertOneTodo: actionResolvers.UpsertOneTodoResolver
    }
};
const crudResolversInfo = {
    Todo: ["aggregateTodo", "createManyTodo", "createOneTodo", "deleteManyTodo", "deleteOneTodo", "findFirstTodo", "todos", "todo", "groupByTodo", "updateManyTodo", "updateOneTodo", "upsertOneTodo"]
};
const argsInfo = {
    AggregateTodoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyTodoArgs: ["data"],
    CreateOneTodoArgs: ["data"],
    DeleteManyTodoArgs: ["where"],
    DeleteOneTodoArgs: ["where"],
    FindFirstTodoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTodoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTodoArgs: ["where"],
    GroupByTodoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTodoArgs: ["data", "where"],
    UpdateOneTodoArgs: ["data", "where"],
    UpsertOneTodoArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Todo: ["id", "createdAt", "text", "completed"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateTodo: ["_count", "_min", "_max"],
    TodoGroupBy: ["id", "createdAt", "text", "completed", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    TodoCountAggregate: ["id", "createdAt", "text", "completed", "_all"],
    TodoMinAggregate: ["id", "createdAt", "text", "completed"],
    TodoMaxAggregate: ["id", "createdAt", "text", "completed"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    TodoWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "text", "completed"],
    TodoOrderByWithRelationInput: ["id", "createdAt", "text", "completed"],
    TodoWhereUniqueInput: ["id"],
    TodoOrderByWithAggregationInput: ["id", "createdAt", "text", "completed", "_count", "_max", "_min"],
    TodoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "text", "completed"],
    TodoCreateInput: ["id", "createdAt", "text", "completed"],
    TodoUpdateInput: ["createdAt", "text", "completed"],
    TodoCreateManyInput: ["id", "createdAt", "text", "completed"],
    TodoUpdateManyMutationInput: ["createdAt", "text", "completed"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolFilter: ["equals", "not"],
    TodoCountOrderByAggregateInput: ["id", "createdAt", "text", "completed"],
    TodoMaxOrderByAggregateInput: ["id", "createdAt", "text", "completed"],
    TodoMinOrderByAggregateInput: ["id", "createdAt", "text", "completed"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    StringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
