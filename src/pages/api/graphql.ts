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

// const url = process.env.MONGO_URL;
// const db = process.env.DATBASE_NAME;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // if (!url || !db) throw new Error('No database to connect to');

  const prisma = new PrismaClient({
    // datasources: {
    //   db: {
    //     url: `${url}/${db}?authSource=admin`,
    //   },
    // },
  });

  const apolloServer = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  await apolloServer.start();
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
};
