import 'reflect-metadata';
import { NextApiRequest, NextApiResponse } from 'next';

import { getServer } from 'src/graphql/server';

export const config = {
  api: {
    bodyParser: false,
    // externalResolver: true,
  },
};

const main = async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServer = getServer();
  await apolloServer.start();
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
};

export default main;
