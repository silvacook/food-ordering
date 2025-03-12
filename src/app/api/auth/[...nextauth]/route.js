import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/libs/mongoConnect";
import { User } from "@/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

// Define NextAuth options
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt", // Ensure that JWT session handling is used
  },
  providers: [
    // Google authentication provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Credentials authentication provider
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check if credentials are provided
        if (!credentials?.email || !credentials?.password) return null;

        // Connect to MongoDB if not already connected
        if (mongoose.connection.readyState !== 1) {
          await mongoose.connect(process.env.MONGO_URL);
        }

        // Find the user in the database
        const user = await User.findOne({ email: credentials.email });
        if (!user) return null;

        // Compare passwords
        const passwordOk = await bcrypt.compare(credentials.password, user.password);

        // Return the user if credentials are valid, else null
        return passwordOk ? user : null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

// Default export for API route handler
export { handler as GET, handler as POST };
