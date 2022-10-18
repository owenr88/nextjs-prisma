import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import { printSchema } from 'graphql';

import { resolvers } from './generated/type-graphql/index';
import CustomResolvers from './custom-resolvers';

export const schema = buildSchemaSync({
  resolvers: [...resolvers, ...CustomResolvers],
  validate: false,
});

export const schemaDef = printSchema(schema);

export default schemaDef;
