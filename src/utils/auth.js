import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/libs/mongoConnect";
import { User } from "@/models/User";
import { UserInfo } from "@/models/UserInfo";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
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

export async function isAdmin() {
  await mongoose.connect(process.env.MONGO_URL);
  
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return false;

  const userInfo = await UserInfo.findOne({ email: session.user.email });
  if (!userInfo) return false;
  
  return userInfo.admin === true;
}