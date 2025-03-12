import { getServerSession } from "next-auth";
import { User } from "@/models/User";
import mongoose from "mongoose";

// Function to check if a user is admin
export async function isAdmin(req) {
  // Connect to MongoDB if not already connected
  await mongoose.connect(process.env.MONGO_URL);

  // Get session
  const session = await getServerSession({ req }); // Pass req wrapped in an object

  if (!session?.user?.email) return false;

  // Find the user and check if they have the admin role
  const user = await User.findOne({ email: session.user.email });
  return user?.role === "admin"; // Check for admin role
}
