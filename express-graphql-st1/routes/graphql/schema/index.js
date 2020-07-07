import { GraphQLSchema, printSchema } from 'graphql';
import { mutation } from '../mutation';
import { query } from '../query';

export function getSchemaString() {
  return printSchema(schema);
}

const schema = new GraphQLSchema({
  query,
  mutation,
});

export { schema };