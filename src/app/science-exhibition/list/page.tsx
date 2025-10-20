import { Metadata } from "next";

import ParticipantsList from "@/components/science-exhibition/ParticipantsList";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Science Exhibition Participants | Addovedi Tech Fest",
  description: "List of all registered participants for the Science Exhibition",
};

export const dynamic = "force-dynamic";

export default async function ParticipantsPage() {
  // Get initial data with parsed dates
  const data = await prisma.scienceExhibition.findMany({
    take: 10,
    include: {
      participants: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Transform dates to ISO strings to ensure consistency
  const initialData = data.map((item) => ({
    ...item,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
    participants: item.participants.map((p) => ({
      ...p,
      createdAt: p.createdAt.toISOString(),
    })),
  }));

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">
          Science Exhibition Participants
        </h1>
        <ParticipantsList initialData={initialData} />
      </div>
    </main>
  );
}
