export const paymentSchema = `#graphql
    type Payement {
        _id: ID!
        clientId: String!
        amount: String!
        createdAt: String!
        updatedAt: String!
    }

    input PayementInput {
        clientId: String!
        amount: String!
    }

    type Query {
        payments: [Payement!]!
        payment(id: ID!): Payement!
    }

    type Mutation {
        createPayment(payementInput: PayementInput): Payement
        updatePayment(id: ID!, payementInput: PayementInput): Payement
        deletePayment(id: ID!): Payement
    }
`