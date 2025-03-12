import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth"; // Import authOptions from your auth file
import { User } from "@/models/User";
import mongoose from "mongoose";

export async function isAdmin() {
  await mongoose.connect(process.env.MONGO_URL);
  
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return false;

  const user = await User.findOne({ email: session.user.email });
  return user?.role === "admin";
}