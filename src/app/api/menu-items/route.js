import mongoose from "mongoose";
import MenuItem from "@/models/MenuItem"; // Ensure correct import
import { isAdmin } from "@/utils/auth";

export async function POST(req) {
    await mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    
    if (await isAdmin(req)) {
        const menuItemDoc = await MenuItem.create(data);
        return new Response(JSON.stringify(menuItemDoc), { status: 201 });
    } else {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
}

export async function PUT(req) {
    await mongoose.connect(process.env.MONGO_URL);
    if (await isAdmin(req)) {
        const { _id, ...data } = await req.json();
        await MenuItem.findByIdAndUpdate(_id, data);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
}

export async function GET() {
    await mongoose.connect(process.env.MONGO_URL);
    const menuItems = await MenuItem.find();
    return new Response(JSON.stringify(menuItems), { status: 200 });
}

export async function DELETE(req) {
    await mongoose.connect(process.env.MONGO_URL);
    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");

    if (await isAdmin(req)) {
        await MenuItem.deleteOne({ _id });
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
}
