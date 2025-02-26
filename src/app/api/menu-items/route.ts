import { isAdmin } from "@/utils/auth"
import { MenuItem } from "@/models/MenuItem";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const data = await req.json();

    if (!(await isAdmin(req))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const menuItemDoc = await MenuItem.create(data);
    return NextResponse.json(menuItemDoc);
  } catch (error) {
    console.error("Error creating menu item:", error);
    return NextResponse.json(
      { error: "Failed to create menu item" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const { _id, ...data } = await req.json();

    if (!(await isAdmin(req))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const updatedMenuItem = await MenuItem.findByIdAndUpdate(_id, data, {
      new: true, // Return the updated document
    });

    if (updatedMenuItem) {
      return NextResponse.json(updatedMenuItem);
    } else {
      return NextResponse.json(
        { error: "Menu item not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error updating menu item:", error);
    return NextResponse.json(
      { error: "Failed to update menu item" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const menuItems = await MenuItem.find();
    return NextResponse.json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return NextResponse.json(
      { error: "Failed to fetch menu items" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");

    if (!(await isAdmin(req))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    if (!_id) {
      return NextResponse.json(
        { error: "Missing _id parameter" },
        { status: 400 }
      );
    }

    const deletedMenuItem = await MenuItem.findByIdAndDelete(_id, {
      new: true, // Return the updated document
    });

    if (deletedMenuItem) {
      return NextResponse.json(deletedMenuItem);
    } else {
      return NextResponse.json(
        { error: "Menu item not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error deleting menu item:", error);
    return NextResponse.json(
      { error: "Failed to delete menu item" },
      { status: 500 }
    );
  }
}