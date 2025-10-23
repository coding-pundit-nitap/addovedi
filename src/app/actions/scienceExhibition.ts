"use server";

import { prisma } from "@/lib/prisma";
import {
  ScienceExhibitionFormValues,
  scienceExhibitionSchema,
} from "@/lib/schemas/scienceExhibitionSchema";

export async function registerScienceExhibition(
  data: ScienceExhibitionFormValues
) {
  try {
    // Validate request data
    const validationResult = scienceExhibitionSchema.safeParse(data);

    if (!validationResult.success) {
      return {
        success: false,
        error: "Validation failed",
        details: validationResult.error.issues,
      };
    }

    const {
      schoolName,
      teacherCoordinator,
      teacherPhone,
      category,
      topic,
      participants,
    } = validationResult.data;

    // Create science exhibition entry with participants
    const exhibition = await prisma.scienceExhibition.create({
      data: {
        schoolName,
        teacherCoordinator,
        teacherPhone,
        category,
        topic,
        participants: {
          create: participants.map((participant) => ({
            name: participant.name,
            class: participant.class,
            contact: participant.contact,
          })),
        },
      },
      include: {
        participants: true,
      },
    });

    console.log("Science exhibition registered successfully:", exhibition.id);

    return {
      success: true,
      message: "Registration successful!",
      data: exhibition,
    };
  } catch (error) {
    console.log("Failed to register science exhibition:", error);
    return {
      success: false,
      error: "Registration failed",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function getScienceExhibitions(options?: {
  category?: string;
  cursor?: string;
  limit?: number;
}) {
  try {
    const limit = options?.limit || 10;
    const cursor = options?.cursor;

    const exhibitions = await prisma.scienceExhibition.findMany({
      where: {
        ...(options?.category ? { category: options.category } : {}),
        ...(cursor ? { id: { lt: cursor } } : {}),
      },
      include: {
        participants: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: limit + 1, // Fetch one extra to check if there's more
    });

    const hasMore = exhibitions.length > limit;
    const items = hasMore ? exhibitions.slice(0, limit) : exhibitions;
    const nextCursor = hasMore ? items[items.length - 1].id : null;

    return {
      success: true,
      data: items,
      nextCursor,
      hasMore,
    };
  } catch (error) {
    console.log("Failed to fetch science exhibitions:", error);
    return {
      success: false,
      error: "Failed to fetch exhibitions",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function deleteScienceExhibition(id: string) {
  try {
    await prisma.scienceExhibition.delete({
      where: { id },
    });

    console.log("Science exhibition deleted successfully:", id);

    return {
      success: true,
      message: "Exhibition deleted successfully",
    };
  } catch (error) {
    console.log("Failed to delete science exhibition:", error);
    return {
      success: false,
      error: "Failed to delete exhibition",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
