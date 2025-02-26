import { isAdmin } from "@/utils/auth"; 
import { User } from "@/models/User";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req) {
  await mongoose.connect(process.env.MONGO_URL);

  if (await isAdmin(req)) {
    const users = await User.find();
    return NextResponse.json(users);
  } else {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
}
