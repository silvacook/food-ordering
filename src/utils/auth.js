// src/utils/admin.js
import { getServerSession } from "next-auth";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function isAdmin(req) {
  await mongoose.connect(process.env.MONGO_URL);
  
  // If req is provided, use it, otherwise use authOptions
  const session = req ? await getServerSession(req) : await getServerSession(authOptions);
  if (!session?.user?.email) return false;

  const user = await User.findOne({ email: session.user.email });
  return user?.role === "admin";
}