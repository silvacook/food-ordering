import mongoose from "mongoose";
import { Category } from "../../../models/Category";
import { isAdmin } from "@/utils/auth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    mongoose.connect(process.env.MONGO_URL);
    const {name} = await req.json();
    let categoryDoc;
    if (await isAdmin()) {
        categoryDoc = await Category.create({name});
    } else {
        return Response.json({});
    }
    return Response.json(categoryDoc);
}

export async function PUT(req: NextRequest) {
    mongoose.connect(process.env.MONGO_URL);
    const { _id, name } = await req.json();
    if (await isAdmin()) {
        await Category.updateOne({_id}, {name});
    }
    return Response.json(true);
}

export async function GET() {
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(
        await Category.find()
    );
}

export async function DELETE(req: NextRequest) {
    mongoose.connect(process.env.MONGO_URL);
    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");
    if(await isAdmin()) {
        await Category.deleteOne({_id});
    }
    return Response.json(true);
}