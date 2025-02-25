import clientPromise from "@/libs/mongoConnect";
import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import { User } from '@/models/User';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import type { SessionStrategy } from "next-auth";

// Define authOptions with the appropriate providers and adapter
export const authOptions = {
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            id: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "test@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;

                try {
                    // Connect to MongoDB
                    await mongoose.connect(process.env.MONGO_URL);
                    
                    // Find the user
                    const user = await User.findOne({ email });
                    console.log("Login attempt:", email, "User found:", !!user);
                    
                    if (!user) {
                        console.log("No user found with email:", email);
                        return null;
                    }
                    
                    // Check if the user has a password (might not if created via Google)
                    if (!user.password) {
                        console.log("User has no password set (likely created via OAuth)");
                        return null;
                    }
                    
                    // Check password
                    const passwordOk = bcrypt.compareSync(password, user.password);
                    console.log("Password check result:", passwordOk);
                    
                    if (passwordOk) {
                        // Return a standardized user object
                        return {
                            id: user._id.toString(),
                            email: user.email,
                            name: user.name || user.email.split('@')[0],
                            role: user.role
                        };
                    }
                    
                    return null;
                } catch (error) {
                    console.error("Auth error:", error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
        error: '/login'
    },
    session: {
        strategy: "jwt" as SessionStrategy
    },
    callbacks: {
        async jwt({ token, user }) {
            // Add user details to the JWT token when signing in
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            // Add user details from the token to the session
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        }
    },
    debug: process.env.NODE_ENV === 'development',
};

// Add the isAdmin helper function
export function isAdmin(session) {
    return session?.user?.role === 'admin';
}