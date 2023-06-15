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
            });
            return await payment.save();
        },

        updatePayment: async (_, { id, paymentInput }) => {
            const payment = await payment.findById(id);
            if (!payment) {
                throw new Error("payment not found");
            }
            payment.clientId = paymentInput.clientId;
            payment.amount = paymentInput.amount;
            return await payment.save();
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
