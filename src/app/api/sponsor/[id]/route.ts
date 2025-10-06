import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

interface sponserId {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: sponserId) {
  const { id } = await params;

  try {
    const sponsor = await prisma.sponsor.findUnique({ where: { id: id } });

    if (sponsor) return NextResponse.json(sponsor, { status: 200 });
    else
      return NextResponse.json({ error: "Sponsor not found" }, { status: 404 });
  } catch (error) {
    console.error(`Failed to fetch sponsor ${id}:`, error);
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
