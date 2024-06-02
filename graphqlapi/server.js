import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers/index.js";
import { typeDefs } from "./loadSchema.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: ({ req, res }) => {
    const token = req.headers.authorization || "";

    // get the user from the token, jwt validation here
    const user = {
      id: 1,
      name: "naveen",
      email: "naveen.kalagarla18@gmail.com",
    };

    return { jwtUser: user };
  },
});

console.log(`🚀 Server ready at ${url}`);
