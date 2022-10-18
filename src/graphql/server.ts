import { ApolloServer } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';

import { schema } from './schema';

export type Context = {
  prisma: PrismaClient;
};

export const getServer = () => {
  if (!process.env.MONGO_URL) throw new Error('No database to connect to');

  const prisma = new PrismaClient();

  const apolloServer = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
  });

  return apolloServer;
};
