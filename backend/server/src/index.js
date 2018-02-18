/* es-lint-disable no-console */
import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import constants from './config/constants';
import mocks from './mocks/employees';
import './config/db';

const app = express();    
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app
    .use(bodyParser.json())
    .use('/graphiql', graphiqlExpress({
        endpointURL: constants.GRAPHQL_PATH,
    }))
    .use(constants.GRAPHQL_PATH, graphqlExpress({
          schema
        }),
      );

const graphQLServer = createServer(app);
mocks().then(() => {
    graphQLServer.listen(constants.PORT, err => {
        if (err) {
            console.log(`Error running app:  ${err}`);
        } else {
            console.log(`App running on: http://localhost:${constants.PORT}${constants.GRAPHQL_PATH}`);
        }
    });
});

