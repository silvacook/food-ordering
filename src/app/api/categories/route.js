// src/app/api/categories/route.js
import mongoose from "mongoose";
import { Category } from "../../../models/Category";
import { isAdmin } from "../../utils/auth"; // Import from the helper file

export async function POST(req) {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const { name } = await req.json();
    if (await isAdmin()) {
      const categoryDoc = await Category.create({ name });
      return Response.json(categoryDoc);
    } else {
      return Response.json({ error: 'Unauthorized' }, { status: 403 });
    }
  } catch (error) {
    console.error('Error creating category:', error);
    return Response.json({ error: 'Failed to create category' }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const { _id, name } = await req.json();
    if (await isAdmin()) {
      await Category.updateOne({ _id }, { name });
    }
    return Response.json(true);
  } catch (error) {
    console.error('Error updating category:', error);
    return Response.json({ error: 'Failed to update category' }, { status: 500 });
  }
}

export async function GET() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(await Category.find());
  } catch (error) {
    console.error('Error fetching categories:', error);
    return Response.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");
    if (await isAdmin()) {
      await Category.deleteOne({ _id });
    }
    return Response.json(true);
  } catch (error) {
    console.error('Error deleting category:', error);
    return Response.json({ error: 'Failed to delete category' }, { status: 500 });
  }
}