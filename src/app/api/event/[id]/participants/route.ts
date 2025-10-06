import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

interface routeParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: routeParams) {
  const { id } = await params;

  try {
    const participants = await prisma.event.findUnique({
      where: {
        id: id,
      },
      include: {
        students: true,
      },
    });

    if (participants) NextResponse.json(participants, { status: 200 });
    else NextResponse.json({ error: "event id not existed" }, { status: 404 });
  } catch (error) {
    console.error("Failed to Event participants:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      {
        error: "An error occurred while fetching Event participants.",
        details: errorMessage,
      },
      { status: 500 },
    );
  }
}
