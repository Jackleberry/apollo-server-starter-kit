import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import cors from 'cors';
import Schema from './schema';
import Resolvers from './resolvers';
import Mocks from './mocks';

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
});

addMockFunctionsToSchema({
  schema: executableSchema,
  mocks: Mocks,
  preserveResolvers: false,
});

const PORT = 3000;

var app = express();

app.use('/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema: executableSchema
  }));

app.get('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(PORT);