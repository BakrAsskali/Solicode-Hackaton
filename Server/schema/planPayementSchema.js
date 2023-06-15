export const planPayementSchema = `#graphql
    type PlanPayement {
        _id: ID!
        idClient: String!
        typePlan: String!
        createdAt: String!
        updatedAt: String!
    }

    input PlanPayementInput {
        idClient: String!
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