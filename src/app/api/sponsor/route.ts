import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const sponsors = await prisma.sponsor.findMany();
    return NextResponse.json(sponsors, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch sponsors:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      {
        error: "An error occurred while fetching users.",
        details: errorMessage,
      },
      { status: 500 },
    );
  }
}
