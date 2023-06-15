import { categoryChanger } from "../helpers/categories.js";
import payment from "../models/payment.js";

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
        createPayment: async (_, { paymentInput }) => {
            const payment = new payment({
                clientId: paymentInput.clientId,
                amount: paymentInput.amount,
                method: paymentInput.method,
                planPayement: paymentInput.planPayement,
                nbrAPayer: paymentInput.nbrAPayer,
                paymentDate: paymentInput.paymentDate,
                subscriptionDate: paymentInput.subscriptionDate,
            });
            const paymentPlan = new paymentPlan({
                idClient: paymentInput.clientId,
                typePlan: paymentInput.planPayement.typePlan,
            });
            await paymentPlan.save();
            return await payment.save();
        },

        updatePayment: async (_, { id, paymentInput }) => {
            const payment = await payment.findById(id);
            if (!payment) {
                throw new Error("payment not found");
            }
            categoryChanger(clientInput, paymentInput);
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
