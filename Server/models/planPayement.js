import mongoose, { Schema } from "mongoose";

export const planPayementSchema = new Schema({
    clientId: {
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

export default mongoose.model("PlanPayement", planPayementSchema);