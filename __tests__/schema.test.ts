import { schema, schemaDef } from '../src/graphql/schema';
import { validateSchema } from 'graphql';

describe('schema loads correctly', () => {
  it('should have a valid GraphQL schema', () => {
    console.log(schema);
    const errors = validateSchema(schema);
    console.log(errors);
    expect(errors).toHaveLength(0);
  });
});
