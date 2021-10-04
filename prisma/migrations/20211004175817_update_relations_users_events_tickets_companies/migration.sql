/*
  Warnings:

  - You are about to drop the column `ticket_id` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `tickets` table. All the data in the column will be lost.
  - Added the required column `eventId` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_companyId_fkey";

-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_ticket_id_fkey";

-- DropForeignKey
ALTER TABLE "refresh_tokens" DROP CONSTRAINT "refresh_tokens_userId_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_companyId_fkey";

-- DropForeignKey
ALTER TABLE "users_tickets" DROP CONSTRAINT "users_tickets_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "users_tickets" DROP CONSTRAINT "users_tickets_userId_fkey";

-- DropIndex
DROP INDEX "events_companyId_unique";

-- DropIndex
DROP INDEX "events_ticket_id_unique";

-- DropIndex
DROP INDEX "tickets_companyId_unique";

-- DropIndex
DROP INDEX "users_tickets_ticketId_unique";

-- DropIndex
DROP INDEX "users_tickets_userId_unique";

-- AlterTable
ALTER TABLE "events" DROP COLUMN "ticket_id";

-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "companyId",
ADD COLUMN     "eventId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_EventsToTickets" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventsToTickets_AB_unique" ON "_EventsToTickets"("A", "B");

-- CreateIndex
CREATE INDEX "_EventsToTickets_B_index" ON "_EventsToTickets"("B");

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_tickets" ADD CONSTRAINT "users_tickets_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_tickets" ADD CONSTRAINT "users_tickets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventsToTickets" ADD FOREIGN KEY ("A") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventsToTickets" ADD FOREIGN KEY ("B") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
