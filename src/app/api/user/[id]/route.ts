import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id } = await params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if (user) {
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }
  } catch (error) {
    console.error(`Failed to fetch user ${id}:`, error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      {
        error: "An error occurred while fetching the user.",
        details: errorMessage,
      },
      { status: 500 },
    );
  }
}
