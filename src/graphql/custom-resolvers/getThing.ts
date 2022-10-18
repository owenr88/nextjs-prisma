import { ObjectType, Field, Resolver, Query, Ctx } from 'type-graphql';
import { Context } from '../server';

@ObjectType()
class Thing {
  @Field((type) => String)
  thing: string;
}

@Resolver()
class GetThingResolver {
  @Query((returns) => Thing, { nullable: true })
  async getThing(@Ctx() { prisma }: Context): Promise<Thing | null> {
    return Promise.resolve({
      thing: 'Thing!',
    });
  }
}

export default GetThingResolver;
