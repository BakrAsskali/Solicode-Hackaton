import { clientSchema } from "./clientSchema.js";
import { paymentSchema } from "./paymentSchema.js";
import { planPayementSchema } from "./planPayementSchema.js";

export const typeDefs = [clientSchema, planPayementSchema, paymentSchema]