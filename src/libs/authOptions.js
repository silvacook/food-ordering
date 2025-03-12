import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/libs/mongoConnect";
import { User } from "@/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export const authOptions = {  // ✅ Keep only this definition
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email: credentials?.email });
        const passwordOk = user && bcrypt.compareSync(credentials?.password, user.password);

        return passwordOk ? user : null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
