import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import { schema } from '../../graphql/schema';

export const config = {
  api: {
    bodyParser: false,
    // externalResolver: true,
  },
};

const main = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.MONGO_URL) throw new Error('No database to connect to');

  const prisma = new PrismaClient();

  const apolloServer = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  await apolloServer.start();
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
};

export default main;
