import mongoose, { Schema } from "mongoose";

export const paymentSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: "Client",
        required: true
    },
    montant: {
        type: Number,
        required: true
    },
    modePayement: {
        type: String,
        required: true
    },
    planPayement: {
        type: Schema.Types.ObjectId,
        ref: "PlanPayement",
        required: true
    },
    nbrPayementSuccess: {
        type: Number,
        required: true
    },
    nbrdeRetard: {
        type: Number,
        required: true
    },
    nbrAPayer: {
        type: Number,
        required: true
    },
    datePayement: {
        type: Date,
        required: true
    },
    subscriptionDate: {
        type: Date,
        required: true
    },
});

export default mongoose.model("Payment", paymentSchema);

