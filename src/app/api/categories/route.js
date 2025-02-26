import { isAdmin } from "@/utils/auth"; 
import { Category } from "@/models/Category";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const { name } = await req.json();
    
    if (await isAdmin()) {
      const categoryDoc = await Category.create({ name });
      return Response.json(categoryDoc);
    } else {
      return Response.json({ error: "Not authorized" }, { status: 401 });
    }
  } catch (error) {
    console.error("POST category error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const { _id, name } = await req.json();
    
    if (await isAdmin()) {
      const result = await Category.updateOne({ _id }, { name });
      return Response.json({ success: true, result });
    } else {
      return Response.json({ error: "Not authorized" }, { status: 401 });
    }
  } catch (error) {
    console.error("PUT category error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const categories = await Category.find();
    return Response.json(categories);
  } catch (error) {
    console.error("GET categories error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    
    if (await isAdmin()) {
      const result = await Category.deleteOne({ _id });
      return Response.json({ success: true, result });
    } else {
      return Response.json({ error: "Not authorized" }, { status: 401 });
    }
  } catch (error) {
    console.error("DELETE category error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}