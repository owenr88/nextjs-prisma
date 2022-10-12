import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import * as path from 'path';
import { printSchema } from 'graphql';

import {
  TodoCrudResolver,
  // UserRelationsResolver,
  // UserCrudResolver,
  // ListRelationsResolver,
  // ListCrudResolver,
} from './generated/type-graphql/index';

// Need to figure out how to add custom resolvers here
export const schema = buildSchemaSync({
  resolvers: [TodoCrudResolver],
  validate: false,
});

export const schemaDef = printSchema(schema);

export default schemaDef;
