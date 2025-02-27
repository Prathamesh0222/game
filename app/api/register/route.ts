import { SignupSchema } from "@/app/lib/schema";
import { prisma } from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const parsedData = SignupSchema.safeParse(data);

    if (!parsedData.success) {
      return NextResponse.json({
        message: "Validation failed",
        status: 400,
      });
    }

    const { email, username, password } = parsedData.data;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({
        message: "User already exists",
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
      },
    });

    return NextResponse.json({
      message: "User created successfully",
      status: 201,
    });
  } catch (error) {
    console.error("Error while creating user", error);
    return NextResponse.json({
      message: "Error while creating user",
      status: 400,
      error: error,
    });
  }
}
