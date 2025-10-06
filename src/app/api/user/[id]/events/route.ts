import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: { id: string };
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id: id } = params;

  try {
    const userWithEvents = await prisma.user.findUnique({
      where: { id: id },
      include: {
        events: true,
      },
    });

    if (!userWithEvents) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    const registeredEvents = userWithEvents.events.map(
      (registration) => registration,
    );

    return NextResponse.json(registeredEvents, { status: 200 });
  } catch (error) {
    console.error(`Failed to fetch events for user ${userId}:`, error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      {
        error: "An error occurred while fetching events.",
        details: errorMessage,
      },
      { status: 500 },
    );
  }
}
