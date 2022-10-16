export * from './graphql/generated/type-graphql';

export interface Todo {
  id: string;
  created: string;
  text: string;
  completed: boolean;
}
