import { getServerSession } from "next-auth";
import { User } from "@/models/User";
import mongoose from "mongoose";

export async function isAdmin(req) {
  await mongoose.connect(process.env.MONGO_URL);
  
  const session = await getServerSession(req);
  if (!session?.user?.email) return false;

  const user = await User.findOne({ email: session.user.email });
  return user?.role === "admin";
}
