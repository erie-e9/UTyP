export default `
    scalar Date

    type Status {
        message: String!
    }

    type State {
        _id: ID!
        text: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Query {
        getState(_id: ID!): State
        getStates: [ State ]
    }

    type Mutation {
        createState(text: String!): State
        updateState(_id: ID!, text: String): State
        deleteState(_id: ID!): Status
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;