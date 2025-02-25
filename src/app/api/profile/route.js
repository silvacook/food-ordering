import { authOptions } from "../../../app/api/auth/[...nextauth]/route"
import { User } from "@/models/User";
import { UserInfo } from "@/models/UserInfo";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

async function connectToDatabase() {
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw new Error('Database connection failed');
    }
  }
}

export async function PUT(req) {
  await connectToDatabase();

  try {
    const data = await req.json();
    const { _id, name, image, ...otherUserInfo } = data;

    let filter = _id ? { _id } : {};
    if (!_id) {
      const session = await getServerSession(authOptions);
      if (!session || !session.user?.email) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      filter = { email: session.user.email };
    }

    const user = await User.findOne(filter);
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await User.updateOne(filter, { name, image });
    await UserInfo.findOneAndUpdate(
      { email: user.email },
      { $set: otherUserInfo },
      { upsert: true, new: true }
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in PUT:', error);
    return new Response(JSON.stringify({ error: 'Failed to update user' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET(req) {
  await connectToDatabase();

  try {
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');

    let filterUser = _id ? { _id } : {};
    if (!_id) {
      const session = await getServerSession(authOptions);
      if (!session || !session.user?.email) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      filterUser = { email: session.user.email };
    }

    const user = await User.findOne(filterUser).lean();
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const userInfo = await UserInfo.findOne({ email: user.email }).lean();
    return new Response(JSON.stringify({ ...user, ...userInfo }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in GET:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch user' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
