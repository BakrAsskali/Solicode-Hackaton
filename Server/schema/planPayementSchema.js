export const planPayementSchema = `#graphql
    type PlanPayement {
        _id: ID!
        clientId: String!
        typePlan: String!
        createdAt: String!
        updatedAt: String!
    }

    input PlanPayementInput {
        clientId: String!
        typePlan: String!
    }

    type Query {
        planPayements: [PlanPayement!]!
        planPayement(id: ID!): PlanPayement!
    }

    type Mutation {
        createPlanPayement(planPayementInput: PlanPayementInput): PlanPayement
        updatePlanPayement(id: ID!, planPayementInput: PlanPayementInput): PlanPayement
        deletePlanPayement(id: ID!): PlanPayement
    }
`