import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import environment from './config/environment';

if (process.env.NODE_ENV !== 'production') {
    const envs = environment;
    console.log(envs);
}

async function init() {
    const app = express();

    app.use('*', cors());

    app.use(compression());

    const server = new ApolloServer({
        schema,
        introspection: true
    });

    server.applyMiddleware({ app });

    const PORT = 5300;
    const httpServer = createServer(app);
    httpServer.listen(
        { port : PORT },
        () => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}/graphql`)
    );
}

init();