import { categoryChanger } from "../helpers/categories.js";
import { paymentSchema } from "../schema/paymentSchema.js";

export const paymentResolvers = {
    Query: {
        payments: async () => {
            return await payment.find();
        },

        payment: async (_, { id }) => {
            return await payment.findById(id);
        },
    },

    Mutation: {
        createPayment: async (_, { payementInput }) => {
            const payment = new paymentSchema({
                clientId: payementInput.clientId,
                montant: payementInput.amount,
                modePayement: payementInput.method,
                planPayement: payementInput.planPayement,
                nbrPayementSuccess: payementInput.nbrPayementSuccess,
                nbrdeRetard: payementInput.nbrdeRetard,
                nbrAPayer: payementInput.nbrAPayer,
                datePayement: payementInput.paymentDate,
                subscriptionDate: payementInput.subscriptionDate,
            });
            return await payment.save();
        },

        updatePayment: async (_, { id, Input }) => {
            const payment = await payment.findById(id);
            if (!payment) {
                throw new Error("payment not found");
            }
            categoryChanger(clientInput, Input);
        },

        deletePayment: async (_, { id }) => {
            const payment = await payment.findById(id);
            if (!payment) {
                throw new Error("payment not found");
            }
            await payment.deleteOne({ _id: id });
            return payment;
        }
    },
}
