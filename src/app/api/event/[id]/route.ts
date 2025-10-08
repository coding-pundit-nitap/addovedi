import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

interface routeParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: routeParams) {
  const { id } = await params;

  try {
    const event = await prisma.event.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    console.log(`failed to fetch events of id is ${id}`);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: "An error occurred while fetching the Event.",
        details: errorMessage,
      },
      { status: 500 },
    );
  }
}
