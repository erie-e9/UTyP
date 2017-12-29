import GraphQLDate from 'graphql-date';
import StateResolvers from './state-resolvers';


export default {
    Date: GraphQLDate, 
    Query: {
        getStates: StateResolvers.getStates,
        getState: StateResolvers.getState,

    },
    Mutation: {
        createState: StateResolvers.createState,
        updateState: StateResolvers.updateState,
        deleteState: StateResolvers.deleteState
    }
}