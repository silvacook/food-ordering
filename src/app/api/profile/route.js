import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/models/User";
import { UserInfo } from "@/models/UserInfo";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(req) {
  await mongoose.connect(process.env.MONGO_URL); // Await connection

  const data = await req.json();
  const { _id, name, image, ...otherUserInfo } = data;

  let filter = {};
  if (_id) {
    filter = { _id };
  } else {
    const session = await getServerSession(req, authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
    filter = { email: session.user.email };
  }

  const user = await User.findOne(filter);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  await User.updateOne(filter, { name, image });
  await UserInfo.findOneAndUpdate({ email: user.email }, otherUserInfo, { upsert: true });

  return NextResponse.json({ success: true });
}

export async function GET(req) {
  await mongoose.connect(process.env.MONGO_URL); // Await connection

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  let filterUser = {};
  if (_id) {
    filterUser = { _id };
  } else {
    const session = await getServerSession(req, authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({}, { status: 403 });
    }
    filterUser = { email: session.user.email };
  }

  const user = await User.findOne(filterUser).lean();
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const userInfo = await UserInfo.findOne({ email: user.email }).lean();

  return NextResponse.json({ ...user, ...userInfo });
}
