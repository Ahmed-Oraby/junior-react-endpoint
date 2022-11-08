import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers,
});

const port = Number.parseInt(process.env.PORT) || 4000;

server.listen({ port: port }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
