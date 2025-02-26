import { mongooseConnect } from "@/libs/mongoConnect"; // Import the mongooseConnect function
import Category from "@/models/Category";
import { isAdmin } from "@/utils/auth";

// Use the imported mongooseConnect function
export async function POST(req) {
  await mongooseConnect(); // No need to redefine mongooseConnect locally
  const { name } = await req.json();
  
  if (await isAdmin()) {
    const categoryDoc = await Category.create({ name });
    return new Response(JSON.stringify(categoryDoc), {
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
  }
}

export async function PUT(req) {
  await mongooseConnect();
  const { _id, name } = await req.json();

  if (await isAdmin()) {
    await Category.updateOne({ _id }, { name });
    return new Response(JSON.stringify({ success: true }));
  }

  return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
}

export async function GET() {
  await mongooseConnect();
  const categories = await Category.find();

  return new Response(JSON.stringify(categories), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(req) {
  await mongooseConnect();
  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  if (await isAdmin()) {
    await Category.deleteOne({ _id });
    return new Response(JSON.stringify({ success: true }));
  }

  return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
}
