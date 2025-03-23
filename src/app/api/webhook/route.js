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

    // Log all incoming events for debugging
    console.log("Stripe webhook received event type:", event.type);
    console.log("Event data:", JSON.stringify(event.data.object, null, 2));

    // Handle Checkout Session completed event
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const orderId = session?.metadata?.orderId;
        const isPaid = session?.payment_status === "paid";
        
        console.log("Checkout session completed:", { orderId, isPaid, paymentStatus: session?.payment_status });
        
        if (orderId) {
            try {
                const result = await Order.findByIdAndUpdate(
                    orderId, 
                    { paid: true },
                    { new: true }
                );
                console.log("Order update result:", result);
            } catch (error) {
                console.error("Error updating order:", error);
                return Response.json({ error: "Database update failed" }, { status: 500 });
            }
        } else {
            console.log("Order not updated, missing orderId");
        }
    }
    
    // Also handle payment_intent.succeeded event
    if (event.type === "payment_intent.succeeded") {
        const paymentIntent = event.data.object;
        const orderId = paymentIntent?.metadata?.orderId;
        
        console.log("Payment intent succeeded:", { orderId });
        
        if (orderId) {
            try {
                const result = await Order.findByIdAndUpdate(
                    orderId, 
                    { paid: true },
                    { new: true }
                );
                console.log("Order update result:", result);
            } catch (error) {
                console.error("Error updating order:", error);
                return Response.json({ error: "Database update failed" }, { status: 500 });
            }
        } else {
            console.log("Order not updated, missing orderId in payment intent");
        }
    }

    return Response.json({ received: true }, { status: 200 });
}