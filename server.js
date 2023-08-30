import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './typeDefs/typeDefs.js';
import { resolvers } from './resolver/resolvers.js';
import { connectDB } from './models/connection.js';

async function startServer() {
    const app = express();

    const apolloServer = new ApolloServer({ typeDefs, resolvers })
    await apolloServer.start();

    app.use(express.json());
    app.use('/graphql', expressMiddleware(apolloServer));

    app.get("/", (req, res) => {
        res.send("Welcome");
    });
    connectDB();
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`)
    });
}

startServer();