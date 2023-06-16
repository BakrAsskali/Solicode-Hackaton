import { categoryChanger } from "../helpers/categories.js";
import paymentSchema from "../models/payment.js";

export const paymentResolvers = {
    Query: {
        payments: async () => {
            return await paymentSchema.find();
        },

        payment: async (_, { id }) => {
            return await payment.findById(id);
        },
    },

    Mutation: {
        createPayment: async (_, { paymentInput }) => {
            const payment = new paymentSchema({
                clientId: paymentInput.clientId,
                montant: paymentInput.montant,
                modePayement: paymentInput.modePayement,
                planPayement: paymentInput.planPayement,
                nbrPayementSuccess: paymentInput.nbrPayementSuccess,
                nbrAPayer: paymentInput.nbrAPayer,
                nbrdeRetard: paymentInput.nbrdeRetard,
                datePayement: paymentInput.datePayement,
                subscriptionDate: paymentInput.subscriptionDate,
            });
            return await payment.save();
        },

        updatePayment: async (_, { id, Input }) => {
            const payment = await paymentSchema.findById(id);
            if (!payment) {
                throw new Error("payment not found");
            }
            categoryChanger(clientInput, Input);
        },

        deletePayment: async (_, { id }) => {
            const payment = await paymentSchema.findById(id);
            if (!payment) {
                throw new Error("payment not found");
            }
            await payment.deleteOne({ _id: id });
            return payment;
        }
    },
}
