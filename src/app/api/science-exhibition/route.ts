import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const cursor = searchParams.get("cursor");
    const limit = Number(searchParams.get("limit")) || 10;

    const rawParticipants = await prisma.scienceExhibition.findMany({
      take: limit + 1, // Get one extra to determine if there's a next page
      ...(cursor && {
        cursor: {
          id: cursor,
        },
        skip: 1, // Skip the cursor
      }),
      include: {
        participants: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Transform dates to ISO strings for consistent serialization
    const participants = rawParticipants.map((item) => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
      participants: item.participants.map((p) => ({
        ...p,
        createdAt: p.createdAt.toISOString(),
      })),
    }));

    const hasNextPage = participants.length > limit;
    const data = hasNextPage ? participants.slice(0, -1) : participants;
    const nextCursor = hasNextPage ? participants[limit - 1].id : undefined;

    return NextResponse.json({
      data,
      nextCursor,
      hasNextPage,
    });
  } catch (error) {
    console.error("Failed to fetch participants:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch participants",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
