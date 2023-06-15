export const clientSchema = `#graphql
    type Client {
        _id: ID!
        name: String!
        email: String!
        phone: String!
        address: String!
        status: String!
        previousStatus: String!
        createdAt: String!
        updatedAt: String!
    }  

    input ClientInput {
        name: String!
        email: String!
        phone: String!
        address: String!
        status: String!
        previousStatus: String!
    }

    type Query {
        clients: [Client!]!
        client(id: ID!): Client!
    }

    type Mutation {
        createClient(clientInput: ClientInput): Client
        updateClient(id: ID!, clientInput: ClientInput): Client
        deleteClient(id: ID!): Client
    }
`