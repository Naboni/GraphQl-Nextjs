export const resolvers = {
  Query: {
    links: (_parent, _args, ctx) => {
      return ctx.prisma.link.findMany();
    },
  },
  Mutation: {
    createLink: (_parent, _args, ctx) => {
      return ctx.prisma.link.create(..._args);
    },
    updateLink: (_parent, _args, ctx) => {
      return ctx.prisma.link.update({
        where: { id: _args.id },
        data: { ..._args },
      });
    },
    deleteLink: (_parent, _args, ctx) => {
      return ctx.prisma.link.delete({
        where: { id: _args.id },
      });
    },
  },
};
