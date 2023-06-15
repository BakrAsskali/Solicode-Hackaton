import mongoose, { Schema } from "mongoose";
import { clientSchema } from "./client.js";
import { planPayementSchema } from "./planPayement.js";

export const paymentSchema = new Schema({
    idClient: {
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
});
