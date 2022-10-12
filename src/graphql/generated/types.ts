export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateTodo = {
  __typename?: 'AggregateTodo';
  _count?: Maybe<TodoCountAggregate>;
  _max?: Maybe<TodoMaxAggregate>;
  _min?: Maybe<TodoMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Data = {
  __typename?: 'Data';
  test: Scalars['String'];
};

export type DataCompositeFilter = {
  equals?: InputMaybe<DataObjectEqualityInput>;
  is?: InputMaybe<DataWhereInput>;
  isNot?: InputMaybe<DataWhereInput>;
};

export type DataCreateEnvelopeInput = {
  set?: InputMaybe<DataCreateInput>;
};

export type DataCreateInput = {
  test: Scalars['String'];
};

export type DataObjectEqualityInput = {
  test: Scalars['String'];
};

export type DataOrderByInput = {
  test?: InputMaybe<SortOrder>;
};

export type DataUpdateEnvelopeInput = {
  set?: InputMaybe<DataCreateInput>;
  update?: InputMaybe<DataUpdateInput>;
};

export type DataUpdateInput = {
  test?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DataWhereInput = {
  AND?: InputMaybe<Array<DataWhereInput>>;
  NOT?: InputMaybe<Array<DataWhereInput>>;
  OR?: InputMaybe<Array<DataWhereInput>>;
  test?: InputMaybe<StringFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyTodo: AffectedRowsOutput;
  createOneTodo: Todo;
  deleteManyTodo: AffectedRowsOutput;
  deleteOneTodo?: Maybe<Todo>;
  updateManyTodo: AffectedRowsOutput;
  updateOneTodo?: Maybe<Todo>;
  upsertOneTodo: Todo;
};

export type MutationCreateManyTodoArgs = {
  data: Array<TodoCreateManyInput>;
};

export type MutationCreateOneTodoArgs = {
  data: TodoCreateInput;
};

export type MutationDeleteManyTodoArgs = {
  where?: InputMaybe<TodoWhereInput>;
};

export type MutationDeleteOneTodoArgs = {
  where: TodoWhereUniqueInput;
};

export type MutationUpdateManyTodoArgs = {
  data: TodoUpdateManyMutationInput;
  where?: InputMaybe<TodoWhereInput>;
};

export type MutationUpdateOneTodoArgs = {
  data: TodoUpdateInput;
  where: TodoWhereUniqueInput;
};

export type MutationUpsertOneTodoArgs = {
  create: TodoCreateInput;
  update: TodoUpdateInput;
  where: TodoWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateTodo: AggregateTodo;
  findFirstTodo?: Maybe<Todo>;
  groupByTodo: Array<TodoGroupBy>;
  todo?: Maybe<Todo>;
  todos: Array<Todo>;
};

export type QueryAggregateTodoArgs = {
  cursor?: InputMaybe<TodoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TodoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};

export type QueryFindFirstTodoArgs = {
  cursor?: InputMaybe<TodoWhereUniqueInput>;
  distinct?: InputMaybe<Array<TodoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TodoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};

export type QueryGroupByTodoArgs = {
  by: Array<TodoScalarFieldEnum>;
  having?: InputMaybe<TodoScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TodoOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};

export type QueryTodoArgs = {
  where: TodoWhereUniqueInput;
};

export type QueryTodosArgs = {
  cursor?: InputMaybe<TodoWhereUniqueInput>;
  distinct?: InputMaybe<Array<TodoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TodoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  data: Data;
  id: Scalars['String'];
  text: Scalars['String'];
};

export type TodoCountAggregate = {
  __typename?: 'TodoCountAggregate';
  _all: Scalars['Int'];
  completed: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['Int'];
};

export type TodoCountOrderByAggregateInput = {
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type TodoCreateInput = {
  completed: Scalars['Boolean'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  data: DataCreateEnvelopeInput;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
};

export type TodoCreateManyInput = {
  completed: Scalars['Boolean'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  data: DataCreateEnvelopeInput;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
};

export type TodoGroupBy = {
  __typename?: 'TodoGroupBy';
  _count?: Maybe<TodoCountAggregate>;
  _max?: Maybe<TodoMaxAggregate>;
  _min?: Maybe<TodoMinAggregate>;
  completed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  text: Scalars['String'];
};

export type TodoMaxAggregate = {
  __typename?: 'TodoMaxAggregate';
  completed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type TodoMaxOrderByAggregateInput = {
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type TodoMinAggregate = {
  __typename?: 'TodoMinAggregate';
  completed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type TodoMinOrderByAggregateInput = {
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type TodoOrderByWithAggregationInput = {
  _count?: InputMaybe<TodoCountOrderByAggregateInput>;
  _max?: InputMaybe<TodoMaxOrderByAggregateInput>;
  _min?: InputMaybe<TodoMinOrderByAggregateInput>;
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type TodoOrderByWithRelationInput = {
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<DataOrderByInput>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export enum TodoScalarFieldEnum {
  Completed = 'completed',
  CreatedAt = 'createdAt',
  Id = 'id',
  Text = 'text',
}

export type TodoScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TodoScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TodoScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TodoScalarWhereWithAggregatesInput>>;
  completed?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
};

export type TodoUpdateInput = {
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<DataUpdateEnvelopeInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TodoUpdateManyMutationInput = {
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<DataUpdateEnvelopeInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TodoWhereInput = {
  AND?: InputMaybe<Array<TodoWhereInput>>;
  NOT?: InputMaybe<Array<TodoWhereInput>>;
  OR?: InputMaybe<Array<TodoWhereInput>>;
  completed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  data?: InputMaybe<DataCompositeFilter>;
  id?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
};

export type TodoWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ListTodosQueryVariables = Exact<{
  where: TodoWhereInput;
}>;

export type ListTodosQuery = {
  __typename?: 'Query';
  todos: Array<{
    __typename?: 'Todo';
    id: string;
    text: string;
    completed: boolean;
  }>;
};

export type ListTodosForPageQueryVariables = Exact<{
  where: TodoWhereInput;
}>;

export type ListTodosForPageQuery = {
  __typename?: 'Query';
  todos: Array<{ __typename?: 'Todo'; id: string }>;
};

export type CreateTodoMutationVariables = Exact<{
  data: TodoCreateInput;
}>;

export type CreateTodoMutation = {
  __typename?: 'Mutation';
  createOneTodo: {
    __typename?: 'Todo';
    id: string;
    text: string;
    completed: boolean;
  };
};

export type UpdateTodoMutationVariables = Exact<{
  where: TodoWhereUniqueInput;
  data: TodoUpdateInput;
}>;

export type UpdateTodoMutation = {
  __typename?: 'Mutation';
  updateOneTodo?: {
    __typename?: 'Todo';
    id: string;
    text: string;
    completed: boolean;
  } | null;
};

export type DeleteTodoMutationVariables = Exact<{
  where: TodoWhereUniqueInput;
}>;

export type DeleteTodoMutation = {
  __typename?: 'Mutation';
  deleteOneTodo?: { __typename?: 'Todo'; id: string; text: string } | null;
};
