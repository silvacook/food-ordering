import mongoose from "mongoose";
import { Order } from "@/models/Order";
import { isAdmin } from "../auth/[...nextauth]/route";

export async function GET(req) {
    mongoose.connect(process.env.MONGO_URL);

    const admin = await isAdmin();

    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");
    if (_id) {
        return Response.json(await Order.findById(_id));
    }

    if (admin) {
        return Response.json(await Order.find());
    }

    // Accessing user email from the request headers
    const userEmail = req.headers.get('authorization'); 

    if (userEmail) {
        return Response.json(await Order.find({userEmail}));
    }
}