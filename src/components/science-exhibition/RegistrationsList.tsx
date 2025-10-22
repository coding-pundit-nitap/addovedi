"use client";

import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Filter,
  Phone,
  School,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";

import {
  deleteScienceExhibition,
  getScienceExhibitions,
} from "@/app/actions/scienceExhibition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RegistrationListSkeleton } from "./RegistrationSkeleton";

const categories = ["All Categories", "category-a", "category-b", "category-c"];

const categoryNames: Record<string, string> = {
  "All Categories": "All Categories",
  "category-a": "Category A - Classes 8 to 10",
  "category-b": "Category B - Classes 11 to 12",
  "category-c": "Category C - College Level",
};

export default function RegistrationsList() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const queryClient = useQueryClient();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["science-exhibitions", selectedCategory],
    queryFn: async ({ pageParam }) => {
      const result = await getScienceExhibitions({
        category:
          selectedCategory === "All Categories" ? undefined : selectedCategory,
        cursor: pageParam,
        limit: 10,
      });

      if (!result.success) {
        throw new Error(result.error || "Failed to fetch exhibitions");
      }

      return result;
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: undefined as string | undefined,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteScienceExhibition,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["science-exhibitions"] });
    },
  });

  const handleDelete = async (id: string, schoolName: string) => {
    if (
      confirm(
        `Are you sure you want to delete the registration from ${schoolName}?`
      )
    ) {
      deleteMutation.mutate(id);
    }
  };

  const allExhibitions = data?.pages.flatMap((page) => page.data) || [];
  const totalCount = allExhibitions.length;

  if (isLoading) {
    return <RegistrationListSkeleton />;
  }

  if (isError) {
    return (
      <Card className="bg-red-900/20 border-red-500 p-6">
        <p className="text-red-400">
          Error loading registrations: {error.message}
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <Card className="bg-neutral-900 text-white p-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            <span className="font-semibold">
              Total Registrations: {totalCount}
            </span>
          </div>

          <div className="flex bg-neutral-900 text-white items-center gap-2">
            <span className=" text-sm">Category:</span>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 text-white">
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat} className="cursor-pointer">
                    {categoryNames[cat] || cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Registrations List */}
      {allExhibitions.length === 0 ? (
        <Card className="backdrop-blur-sm bg-neutral-900 p-12">
          <div className="text-center">
            <School className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No registrations found
            </h3>
            <p className="text-gray-500">
              No science exhibition registrations match your criteria.
            </p>
          </div>
        </Card>
      ) : (
        <AnimatePresence>
          <div className="space-y-4">
            {allExhibitions.map((exhibition, index) => {
              if (!exhibition) return null;

              return (
                <motion.div
                  key={exhibition.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card>
                    <div className="bg-neutral-900 text-white space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold  flex items-center gap-2">
                            <School className="w-5 h-5 text-accent-teal" />
                            {exhibition.schoolName}
                          </h3>
                          <span className="inline-block px-3 py-1 border border-accent-teal/30 rounded-full text-accent-teal text-sm">
                            {categoryNames[exhibition.category] ||
                              exhibition.category}
                          </span>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleDelete(exhibition.id, exhibition.schoolName)
                          }
                          disabled={deleteMutation.isPending}
                          className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Project Topic */}
                      <div className="p-3 rounded-lg bg-gray-800/50 border border-accent-teal/20">
                        <p className="text-xs text-gray-400 mb-1">
                          Project Topic
                        </p>
                        <p className="text-sm text-white">{exhibition.topic}</p>
                      </div>

                      {/* Info Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-xs ">Teacher Coordinator</p>
                          <p className=" font-medium">
                            {exhibition.teacherCoordinator}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <p className="text-xs  flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            Contact Number
                          </p>
                          <p className=" font-medium">
                            {exhibition.teacherPhone}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <p className="text-xs  flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Registered On
                          </p>
                          <p className=" font-medium">
                            {new Date(exhibition.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <p className="text-xs  flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            Team Size
                          </p>
                          <p className=" font-medium">
                            {exhibition.participants.length} participant(s)
                          </p>
                        </div>
                      </div>

                      {/* Participants */}
                      <div className="pt-4 border-t">
                        <h4 className="text-sm font-semibold text-accent-teal mb-3">
                          Participants:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          {exhibition.participants.map((participant) => (
                            <div
                              key={participant.id}
                              className="rounded-lg p-3 border"
                            >
                              <p className=" font-medium">{participant.name}</p>
                              <p className="text-xs ">
                                Class: {participant.class}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      )}

      {/* Load More Button */}
      {hasNextPage && (
        <div className="flex justify-center pt-4">
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-accent-teal border-t-transparent rounded-full"
              />
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Load More
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
