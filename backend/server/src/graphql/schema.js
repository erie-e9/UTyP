export default `
    type State {
        _id: String,
        text: String
    }

    type Query {
        getStates: [ State ]
    }

    schema {
        query: Query
    }
`;