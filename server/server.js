import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import { authMiddleware, handleLogin } from "./auth";

const PORT = 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.post("/login", handleLogin);

const apolloServer = new ApolloServer({
   /* typeDefs, resolvers */
});
await apolloServer.start();
app.use("/graphql", apolloMiddleware(apolloServer));

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
