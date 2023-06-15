import mongoose, { Schema } from "mongoose";

export const adminSchema = new Schema({
    email: {
        type: String,
        required: true
    },
});