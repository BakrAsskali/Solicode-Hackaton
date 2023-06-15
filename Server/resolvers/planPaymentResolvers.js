import planPayement from "../models/planPayement.js";

export const planPayementResolvers = {
    Query: {
        planPayements: async () => {
            return await planPayement.find();
        },

        planPayement: async (_, { id }) => {
            return await planPayement.findById(id);
        }
    },

    Mutation: {
        createPlanPayement: async (_, { planPayementInput }) => {
            const planPayement = new planPayement({
                clientId: planPayementInput.clientId,
                typePlan: planPayementInput.typePlan,
            });
            return await planPayement.save();
        },

        updatePlanPayement: async (_, { id, planPayementInput }) => {
            const planPayement = await planPayement.findById(id);
            if (!planPayement) {
                throw new Error("planPayement not found");
            }
            planPayement.clientId = planPayementInput.clientId;
            planPayement.typePlan = planPayementInput.typePlan;
            return await planPayement.save();
        },

        deletePlanPayement: async (_, { id }) => {
            const planPayement = await planPayement.findById(id);
            if (!planPayement) {
                throw new Error("planPayement not found");
            }
            await planPayement.deleteOne({ _id: id });
            return planPayement;
        }
    },
}
