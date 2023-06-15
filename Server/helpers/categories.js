import payment from "../models/payment.js";
import { clientSchema } from "../schema/clientSchema.js";
import { paymentSchema } from "../schema/paymentSchema.js";

export async function categoryChanger(clientInput, paymentInput) {
    const client = new clientSchema({
        name: clientInput.name,
        email: clientInput.email,
        phone: clientInput.phone,
        address: clientInput.address,
        status: clientInput.status,
        previousStatus: clientInput.previousStatus,
    });
    const payment = new payment({
        clientId: paymentInput.clientId,
        amount: paymentInput.amount,
        method: paymentInput.method,
        planPayment: paymentInput.planPayment,
        nbrPaymentSuccess: paymentInput.nbrPaymentSuccess,
        nbrdeRetard: paymentInput.nbrDeRetard,
        nbrAPayer: paymentInput.nbrAPayer,
        paymentDate: paymentInput.paymentDate,
        subscriptionDate: paymentInput.subscriptionDate,
    });

    let initialStatus = clientInput.status;
    let finalStatus = clientInput.status;
    let date = payment.subscriptionDate;
    let presentDate = new Date();
    const yearDifference = presentDate.getFullYear() - date.getFullYear();

    switch (payment.planPayment) {
        case "Premium":
            date.setmonth(date.getmonth() + 12);
            if (date > payment.paymentDate) {
                payment.nbrDeRetard++;
                if (payment.nbrDeRetard = 6 && client.status == "Gold") {
                    finalStatus = "Green";
                    payment.nbrDeRetard = 0;
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrAPayer++;
                } else if (payment.nbrDeRetard = 3 && client.status == "Green") {
                    finalStatus = "Red";
                    payment.nbrDeRetard = 0;
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrAPayer++;
                } else if (payment.nbrDeRetard = 2 && client.status == "Red") {
                    finalStatus = "Black";
                    payment.nbrDeRetard = 0;
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrAPayer++;
                }
            } else {
                payment.nbrPaymentSuccess++;
                if (payment.nbrdeRetard == 0 && client.status == "Green" && yearDifference >= 1) {
                    client.status = "Gold";
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrDeRetard = 0;
                } else if (payment.nbrdeRetard == 0 && client.status == "Red" && payment.nbrPaymentSuccess == 3) {
                    client.status = "Green";
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrDeRetard = 0;
                } else if (payment.nbrdeRetard == 0 && client.status == "Black" && payment.nbrPaymentSuccess == 2) {
                    client.status = "Red";
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrDeRetard = 0;
                }
            }
            break;

        case "Normal":
            date.setmonth(date.getmonth() + 6);
            if (date > payment.paymentDate) {
                payment.nbrDeRetard++;
                if (payment.nbrDeRetard = 6 && client.status == "Gold") {
                    finalStatus = "Green";
                    payment.nbrDeRetard = 0;
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrAPayer++;
                } else if (payment.nbrDeRetard = 3 && client.status == "Green") {
                    finalStatus = "Red";
                    payment.nbrDeRetard = 0;
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrAPayer++;
                } else if (payment.nbrDeRetard = 2 && client.status == "Red") {
                    finalStatus = "Black";
                    payment.nbrDeRetard = 0;
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrAPayer++;
                }
            } else {
                payment.nbrPaymentSuccess++;
                if (payment.nbrdeRetard == 0 && client.status == "Green" && yearDifference >= 1) {
                    client.status = "Gold";
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrDeRetard = 0;
                } else if (payment.nbrdeRetard == 0 && client.status == "Red" && payment.nbrPaymentSuccess == 3) {
                    client.status = "Green";
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrDeRetard = 0;
                } else if (payment.nbrdeRetard == 0 && client.status == "Black" && payment.nbrPaymentSuccess == 2) {
                    client.status = "Red";
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrDeRetard = 0;
                }
            }
            break;

        case "Essai":
            date.setmonth(date.getmonth() + 1);
            if (date > payment.paymentDate) {
                payment.nbrDeRetard++;
                if (payment.nbrDeRetard = 6 && client.status == "Gold") {
                    finalStatus = "Green";
                    payment.nbrDeRetard = 0;
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrAPayer++;
                } else if (payment.nbrDeRetard = 3 && client.status == "Green") {
                    finalStatus = "Red";
                    payment.nbrDeRetard = 0;
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrAPayer++;
                } else if (payment.nbrDeRetard = 2 && client.status == "Red") {
                    finalStatus = "Black";
                    payment.nbrDeRetard = 0;
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrAPayer++;
                }
            } else {
                payment.nbrPaymentSuccess++;
                if (payment.nbrdeRetard == 0 && client.status == "Green" && yearDifference >= 1) {
                    client.status = "Gold";
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrDeRetard = 0;
                } else if (payment.nbrdeRetard == 0 && client.status == "Red" && payment.nbrPaymentSuccess == 3) {
                    client.status = "Green";
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrDeRetard = 0;
                } else if (payment.nbrdeRetard == 0 && client.status == "Black" && payment.nbrPaymentSuccess == 2) {
                    client.status = "Red";
                    payment.nbrPaymentSuccess = 0;
                    payment.nbrDeRetard = 0;
                }
            }
            break;
    }

    if (initialStatus != finalStatus) {
        client.status = finalStatus;
    }

    await client.save();
    await payment.save();
    res.status(200).json({ message: "Payment updated!" });
};
