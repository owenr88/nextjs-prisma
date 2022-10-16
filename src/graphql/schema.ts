import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import { printSchema } from 'graphql';

import { resolvers } from './generated/type-graphql/index';

// Need to figure out how to add custom resolvers here
export const schema = buildSchemaSync({
  resolvers,
  validate: false,
});

export const schemaDef = printSchema(schema);

export default schemaDef;
