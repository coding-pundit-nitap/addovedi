import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const branch = searchParams.get("branch");

    const events = await prisma.event.findMany();
    const filteredEvents = branch
      ? events.filter((event) => event.branch === branch)
      : events;

    return NextResponse.json(filteredEvents, { status: 200 });
  } catch (error) {
    console.log("failed to fetch events");
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: "An error occurred while fetching the Events.",
        details: errorMessage,
      },
      { status: 500 },
    );
  }
}
