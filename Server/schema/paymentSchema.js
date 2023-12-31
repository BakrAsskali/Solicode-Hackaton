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

    input PaymentInput {
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
        createPayment(PaymentInput: PaymentInput): Payement
        updatePayment(id: ID!, paymentInput: PaymentInput): Payement
        deletePayment(id: ID!): Payement
    }
`