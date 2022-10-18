import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { PrismaClient } from '@prisma/client';

export const authOptions = {
  adapter: PrismaAdapter(new PrismaClient()),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: 'devs@biglemon.co.uk',
    }),
  ],
};

export default NextAuth(authOptions);
