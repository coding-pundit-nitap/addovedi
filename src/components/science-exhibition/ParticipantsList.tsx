"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Calendar,
  GraduationCap,
  MapPin,
  Phone,
  School,
  User,
  Users,
} from "lucide-react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/dateUtils";

type Participant = {
  id: string;
  name: string;
  class: string;
  contact: string;
  exhibitionId: string;
  createdAt: string;
};

type Exhibition = {
  id: string;
  schoolName: string;
  teacherCoordinator: string;
  teacherPhone: string;
  category: string;
  topic: string;
  participants: Participant[];
  createdAt: string;
  updatedAt: string;
};

type PageData = {
  data: Exhibition[];
  nextCursor: string | undefined;
  hasNextPage: boolean;
};

export default function ParticipantsList({
  initialData,
}: {
  initialData: Exhibition[];
}) {
  const { ref, inView } = useInView();

  const fetchParticipants = async ({ pageParam }: { pageParam?: string }) => {
    const url = new URL("/api/science-exhibition", window.location.origin);
    if (pageParam) url.searchParams.set("cursor", pageParam);
    url.searchParams.set("limit", "10");
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json() as Promise<PageData>;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["science-exhibitions"],
      queryFn: fetchParticipants,
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialData: {
        pages: [
          {
            data: initialData,
            hasNextPage: true,
            nextCursor: initialData[initialData.length - 1]?.id,
          },
        ],
        pageParams: [undefined],
      },
    });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 bg-navy-deep border border-red-500/20 rounded-xl"
      >
        <div className="text-red-400 text-6xl mb-4">⚠️</div>
        <h3 className="text-xl font-bold text-red-400 mb-2">
          Error Loading Data
        </h3>
        <p className="text-red-300/80">
          Failed to fetch participants. Please try again.
        </p>
      </motion.div>
    );
  }

  const exhibitions = data?.pages.flatMap((page) => page.data) ?? [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-4 bg-navy border border-gray-700 hover:border-accent-teal/50 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <School className="text-white w-8 h-8" />
            <div>
              <p className="text-2xl font-bold text-white">
                {exhibitions.length}
              </p>
              <p className="text-sm text-gray-400">Schools Registered</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-navy border border-gray-700 hover:border-accent-magenta/50 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <Users className="text-white w-8 h-8" />
            <div>
              <p className="text-2xl font-bold text-white">
                {exhibitions.reduce(
                  (acc, exp) => acc + exp.participants.length,
                  0
                )}
              </p>
              <p className="text-sm text-gray-400">Total Participants</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-navy border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <GraduationCap className="text-yellow-400 w-8 h-8" />
            <div>
              <p className="text-2xl font-bold text-yellow-400">
                {new Set(exhibitions.map((exp) => exp.category)).size}
              </p>
              <p className="text-sm text-gray-400">Categories</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Exhibitions List */}
      {exhibitions.map((exhibition) => (
        <Card
          key={exhibition.id}
          className="p-6 bg-navy-deep border border-gray-700 hover:border-accent-teal/40 transition-all duration-500 relative overflow-hidden"
        >
          <div className="relative z-10">
            {/* School header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex items-center space-x-3 mb-3 lg:mb-0">
                <div className="p-3 rounded-xl bg-gray-800 border border-gray-700">
                  <School className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white transition-colors duration-300">
                    {exhibition.schoolName}
                  </h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">
                      Registered {formatDate(exhibition.createdAt)}
                    </span>
                  </div>
                </div>
              </div>

              <Badge
                variant="outline"
                className="px-4 py-2 text-white border-accent-magenta/50 bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                {exhibition.category}
              </Badge>
            </div>

            {/* Project Topic */}
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-accent-teal/20">
              <p className="text-sm text-gray-400 mb-1 font-medium">
                Project Topic
              </p>
              <p className="text-white leading-relaxed">{exhibition.topic}</p>
            </div>

            {/* Teacher info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-accent-teal/30 transition-colors">
                <div className="p-2 rounded-lg bg-gray-800">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    {exhibition.teacherCoordinator}
                  </p>
                  <p className="text-sm text-gray-400">Teacher Coordinator</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-accent-magenta/30 transition-colors">
                <div className="p-2 rounded-lg bg-gray-800">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    {exhibition.teacherPhone}
                  </p>
                  <p className="text-sm text-gray-400">Contact Number</p>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Participants</span>
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-gray-800 text-white border-accent-magenta/30"
                  >
                    {exhibition.participants.length}
                  </Badge>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {exhibition.participants.map((participant, pIndex) => (
                  <motion.div
                    key={participant.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: pIndex * 0.05 }}
                    className="p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-accent-teal/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-gray-800">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white truncate">
                          {participant.name}
                        </p>
                        <div className="space-y-1 mt-2">
                          <p className="text-sm text-gray-400 flex items-center">
                            <GraduationCap className="w-3 h-3 mr-1" />
                            Class: {participant.class}
                          </p>
                          <p className="text-sm text-gray-400 flex items-center">
                            <Phone className="w-3 h-3 mr-1" />
                            {participant.contact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}

      {/* Loading & End Indicators */}
      <div ref={ref} className="flex items-center justify-center py-8">
        {isFetchingNextPage && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-20 w-full bg-gray-800 animate-pulse" />
                <Skeleton className="h-4 w-3/4 bg-gray-700" />
                <Skeleton className="h-4 w-1/2 bg-gray-700" />
              </div>
            ))}
          </motion.div>
        )}

        {!hasNextPage && exhibitions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 rounded-xl bg-gray-900 border border-gray-700"
          >
            <div className="text-white text-4xl mb-3">🎉</div>
            <p className="text-white font-semibold">All exhibitions loaded!</p>
            <p className="text-gray-400 text-sm mt-1">
              You've reached the end of the list
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
