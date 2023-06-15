export const paymentSchema = `#graphql
    type Payement {
        _id: ID!
        clientId: String!
        amount: Float!
        method: String!
        planPayement: PlanPayement!
        nbrPayementSuccess: Int!
        nbrdeRetard: Int!
        nbrAPayer: Int!
        paymentDate: String!
        subscriptionDate: String!
        createdAt: String!
        updatedAt: String!
    }

    input PayementInput {
        clientId: String!
        amount: Float!
        method: String!
        planPayementInput: PlanPayementInput!
        nbrPayementSuccess: Int!
        nbrdeRetard: Int!
        nbrAPayer: Int!
        subscriptionDate: String!
        paymentDate: String!
    }

    type Query {
        payments: [Payement!]!
        payment(id: ID!): Payement!
    }

    type Mutation {
        createPayment(PayementInput: PayementInput): Payement
        updatePayment(id: ID!, payementInput: PayementInput): Payement
        deletePayment(id: ID!): Payement
    }
`