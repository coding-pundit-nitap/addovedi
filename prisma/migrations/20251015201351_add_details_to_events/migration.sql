/*
  Warnings:

  - Added the required column `updatedAt` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "contact" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "guidelines" JSONB,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "prizeMoney" INTEGER,
ADD COLUMN     "resultAnnouncement" TEXT,
ADD COLUMN     "rules" JSONB,
ADD COLUMN     "tag" TEXT,
ADD COLUMN     "teamSize" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
