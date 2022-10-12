---
title: NextJS Prisma
description: A NextJS app using Prisma with a PostgreSQL database
tags:
  - next
  - prisma
  - mongodb
  - typescript
---

# NextJS Prisma Example

This example is a [NextJS](https://nextjs.org/) todo app that uses
[Prisma](https://www.prisma.io/) to store todos in MongoDB.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/HRZqTF)

## ✨ Features

- Prisma
- NextJS
- MongoDB
- TypeScript

## 💁‍♀️ How to use

- Install packages with `yarn`
- Connect to your Railway project with `railway link`
- Run the NextJS app `yarn start`

### Generating/using new GraphQL queries and hooks

1. Add queries into .graphql files in `src/graphql/**`
1. Run `yarn codegen` to generate the types and hooks
1. Import the hook into your component
1. Have loads of fun calling data
