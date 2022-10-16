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

// console.log(process.env);

const main = async (req: NextApiRequest, res: NextApiResponse) => {
  // if (!url || !db) throw new Error('No database to connect to');

  // const datasource = `${url}/${db}?authSource=admin&retryWrites=true&w=majority&directConnection=true&replicaSet=rs1`;
  // console.log(datasource);

  const prisma = new PrismaClient({
    // Add more configurations to the Mongo URL
    // datasources: {
    //   db: {
    //     url: datasource,
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

export default main;
