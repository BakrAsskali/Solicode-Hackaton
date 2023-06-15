import { clientResolvers } from "./clientResolvers.js";
import { paymentResolvers } from "./paymentResolvers.js";
import { planPayementResolvers } from "./planPaymentResolvers.js";

export const resolvers = [clientResolvers, planPayementResolvers, paymentResolvers]