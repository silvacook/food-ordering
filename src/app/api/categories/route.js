import { isAdmin } from "@/utils/auth";
import mongoose from "mongoose";
import Category from "@/models/Category"; // Ensure you import your Category model

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URL);
  const { name } = await req.json();
  if (await isAdmin()) {
    const categoryDoc = await Category.create({ name });
    return Response.json(categoryDoc);
  } else {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function PUT(req) {
  await mongoose.connect(process.env.MONGO_URL);
  const { _id, name } = await req.json();
  if (await isAdmin()) {
    await Category.updateOne({ _id }, { name });
    return Response.json({ success: true });
  }
  return Response.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  await mongoose.connect(process.env.MONGO_URL);
  const categories = await Category.find();
  return Response.json(categories);
}

export async function DELETE(req) {
  await mongoose.connect(process.env.MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  if (await isAdmin()) {
    await Category.deleteOne({ _id });
    return Response.json({ success: true });
  }
  return Response.json({ error: "Unauthorized" }, { status: 401 });
}
