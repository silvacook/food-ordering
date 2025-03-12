// src/libs/isAdmin.js

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import authOptions
import { User } from "@/models/User";
import mongoose from "mongoose";

export async function isAdmin(req) {
  await mongoose.connect(process.env.MONGO_URL);

  const session = await getServerSession(req, authOptions); // Pass authOptions here
  if (!session?.user?.email) return false;

  const user = await User.findOne({ email: session.user.email });
  return user?.role === "admin";
}
