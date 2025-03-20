import { Order } from "@/models/Order";
import mongoose from "mongoose";
const stripe = require("stripe")(process.env.STRIPE_SK);

export async function POST(req) {
    // Ensure database connection
    await mongoose.connect(process.env.MONGO_URL);
    
    const sig = req.headers.get("stripe-signature");
    let event;
    
    try {
        const reqBuffer = await req.text();
        const signSecret = process.env.STRIPE_SIGN_SECRET;
        event = stripe.webhooks.constructEvent(reqBuffer, sig, signSecret);
    } catch (e) {
        console.error("Stripe webhook error:", e.message);
        return Response.json({ error: e.message }, { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
        const orderId = event?.data?.object?.metadata?.orderId;
        const isPaid = event?.data?.object?.payment_status === "paid";
        
        console.log("Webhook received:", { orderId, isPaid, eventType: event.type });
        
        if (isPaid && orderId) {
            try {
                const result = await Order.updateOne(
                    { _id: orderId }, 
                    { paid: true }
                );
                console.log("Order update result:", result);
            } catch (error) {
                console.error("Error updating order:", error);
                return Response.json({ error: "Database update failed" }, { status: 500 });
            }
        } else {
            console.log("Order not updated, missing data:", { isPaid, orderId });
        }
    }

    return Response.json({ received: true }, { status: 200 });
}