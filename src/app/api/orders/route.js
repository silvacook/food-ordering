import mongoose from "mongoose";
import { Order } from "@/models/Order";
import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import { getServerSession } from "next-auth";
import { isAdmin } from '../../api/auth/[...nextauth]/authOptions';

export async function GET(req) {
    await mongoose.connect(process.env.MONGO_URL);
    
    // Get the session first
    const session = await getServerSession(authOptions);
    
    // Then call isAdmin - make sure this matches how isAdmin is implemented
    const admin = await isAdmin();

    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");
    if (_id) {
        return Response.json(await Order.findById(_id));
    }

    if (admin) {
        return Response.json(await Order.find());
    }

    // Get the email from the session instead of headers
    const userEmail = session?.user?.email;

    if (userEmail) {
        return Response.json(await Order.find({userEmail}));
    }

    // Return empty array if no session
    return Response.json([]);
}