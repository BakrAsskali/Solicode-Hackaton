import mongoose, { Schema } from "mongoose";
import { clientSchema } from "./client.js";

export const planPayementSchema = new Schema({
    idClient: {
        type: Schema.Types.ObjectId,
        ref: "Client",
        required: true
    },
    typePlan: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});