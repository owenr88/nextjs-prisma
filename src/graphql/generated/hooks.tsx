import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetThingDocument = gql`
  query GetThing {
    getThing {
      thing
    }
  }
`;

/**
 * __useGetThingQuery__
 *
 * To run a query within a React component, call `useGetThingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetThingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetThingQuery,
    Types.GetThingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetThingQuery, Types.GetThingQueryVariables>(
    GetThingDocument,
    options
  );
}
export function useGetThingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetThingQuery,
    Types.GetThingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetThingQuery, Types.GetThingQueryVariables>(
    GetThingDocument,
    options
  );
}
export type GetThingQueryHookResult = ReturnType<typeof useGetThingQuery>;
export type GetThingLazyQueryHookResult = ReturnType<
  typeof useGetThingLazyQuery
>;
export type GetThingQueryResult = Apollo.QueryResult<
  Types.GetThingQuery,
  Types.GetThingQueryVariables
>;
export const ListTodosDocument = gql`
  query ListTodos($where: TodoWhereInput!) {
    todos(where: $where) {
      id
      text
      completed
    }
  }
`;

/**
 * __useListTodosQuery__
 *
 * To run a query within a React component, call `useListTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useListTodosQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.ListTodosQuery,
    Types.ListTodosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.ListTodosQuery, Types.ListTodosQueryVariables>(
    ListTodosDocument,
    options
  );
}
export function useListTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ListTodosQuery,
    Types.ListTodosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.ListTodosQuery,
    Types.ListTodosQueryVariables
  >(ListTodosDocument, options);
}
export type ListTodosQueryHookResult = ReturnType<typeof useListTodosQuery>;
export type ListTodosLazyQueryHookResult = ReturnType<
  typeof useListTodosLazyQuery
>;
export type ListTodosQueryResult = Apollo.QueryResult<
  Types.ListTodosQuery,
  Types.ListTodosQueryVariables
>;
export const ListTodosForPageDocument = gql`
  query ListTodosForPage($where: TodoWhereInput!) {
    todos(where: $where) {
      id
    }
  }
`;

/**
 * __useListTodosForPageQuery__
 *
 * To run a query within a React component, call `useListTodosForPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosForPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosForPageQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useListTodosForPageQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.ListTodosForPageQuery,
    Types.ListTodosForPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    Types.ListTodosForPageQuery,
    Types.ListTodosForPageQueryVariables
  >(ListTodosForPageDocument, options);
}
export function useListTodosForPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ListTodosForPageQuery,
    Types.ListTodosForPageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.ListTodosForPageQuery,
    Types.ListTodosForPageQueryVariables
  >(ListTodosForPageDocument, options);
}
export type ListTodosForPageQueryHookResult = ReturnType<
  typeof useListTodosForPageQuery
>;
export type ListTodosForPageLazyQueryHookResult = ReturnType<
  typeof useListTodosForPageLazyQuery
>;
export type ListTodosForPageQueryResult = Apollo.QueryResult<
  Types.ListTodosForPageQuery,
  Types.ListTodosForPageQueryVariables
>;
export const CreateTodoDocument = gql`
  mutation CreateTodo($data: TodoCreateInput!) {
    createOneTodo(data: $data) {
      id
      text
      completed
    }
  }
`;
export type CreateTodoMutationFn = Apollo.MutationFunction<
  Types.CreateTodoMutation,
  Types.CreateTodoMutationVariables
>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateTodoMutation,
    Types.CreateTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.CreateTodoMutation,
    Types.CreateTodoMutationVariables
  >(CreateTodoDocument, options);
}
export type CreateTodoMutationHookResult = ReturnType<
  typeof useCreateTodoMutation
>;
export type CreateTodoMutationResult =
  Apollo.MutationResult<Types.CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateTodoMutation,
  Types.CreateTodoMutationVariables
>;
export const UpdateTodoDocument = gql`
  mutation UpdateTodo($where: TodoWhereUniqueInput!, $data: TodoUpdateInput!) {
    updateOneTodo(where: $where, data: $data) {
      id
      text
      completed
    }
  }
`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<
  Types.UpdateTodoMutation,
  Types.UpdateTodoMutationVariables
>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateTodoMutation,
    Types.UpdateTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.UpdateTodoMutation,
    Types.UpdateTodoMutationVariables
  >(UpdateTodoDocument, options);
}
export type UpdateTodoMutationHookResult = ReturnType<
  typeof useUpdateTodoMutation
>;
export type UpdateTodoMutationResult =
  Apollo.MutationResult<Types.UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateTodoMutation,
  Types.UpdateTodoMutationVariables
>;
export const DeleteTodoDocument = gql`
  mutation DeleteTodo($where: TodoWhereUniqueInput!) {
    deleteOneTodo(where: $where) {
      id
      text
    }
  }
`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<
  Types.DeleteTodoMutation,
  Types.DeleteTodoMutationVariables
>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteTodoMutation,
    Types.DeleteTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.DeleteTodoMutation,
    Types.DeleteTodoMutationVariables
  >(DeleteTodoDocument, options);
}
export type DeleteTodoMutationHookResult = ReturnType<
  typeof useDeleteTodoMutation
>;
export type DeleteTodoMutationResult =
  Apollo.MutationResult<Types.DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteTodoMutation,
  Types.DeleteTodoMutationVariables
>;
