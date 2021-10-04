/*
  Warnings:

  - A unique constraint covering the columns `[companyId]` on the table `events` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyId` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "companyId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "events_companyId_unique" ON "events"("companyId");

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
