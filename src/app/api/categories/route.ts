import mongoose from "mongoose";
import { Category } from "../../../models/Category";
import { isAdmin } from '../../api/auth/[...nextauth]/authOptions';
import { getServerSession } from "next-auth/next";
import { authOptions } from '../../api/auth/[...nextauth]/authOptions';
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    mongoose.connect(process.env.MONGO_URL);
    const {name} = await req.json();
    let categoryDoc;
    
    // Get the session first
    const session = await getServerSession(authOptions);
    
    // Pass session to isAdmin
    if (await isAdmin(session)) {
        categoryDoc = await Category.create({name});
    } else {
        return Response.json({});
    }
    return Response.json(categoryDoc);
}

export async function PUT(req: NextRequest) {
    mongoose.connect(process.env.MONGO_URL);
    const { _id, name } = await req.json();
    
    // Get the session
    const session = await getServerSession(authOptions);
    
    if (await isAdmin(session)) {
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
    
    // Get the session
    const session = await getServerSession(authOptions);
    
    if(await isAdmin(session)) {
        await Category.deleteOne({_id});
    }
    return Response.json(true);
}