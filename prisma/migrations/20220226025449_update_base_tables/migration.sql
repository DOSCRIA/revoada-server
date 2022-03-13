/*
  Warnings:

  - You are about to drop the column `eventId` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `purchaseLimit` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the `_EventsToTickets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refresh_tokens` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `users` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `phone_number` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_EventsToTickets" DROP CONSTRAINT "_EventsToTickets_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventsToTickets" DROP CONSTRAINT "_EventsToTickets_B_fkey";

-- DropForeignKey
ALTER TABLE "refresh_tokens" DROP CONSTRAINT "refresh_tokens_userId_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_eventId_fkey";

-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "eventId",
DROP COLUMN "purchaseLimit",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "neighborhood" TEXT NOT NULL,
ADD COLUMN     "region" TEXT NOT NULL,
DROP COLUMN "phone_number",
ADD COLUMN     "phone_number" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users_companies" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users_tickets" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "_EventsToTickets";

-- DropTable
DROP TABLE "refresh_tokens";

-- CreateTable
CREATE TABLE "users_tokens" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires_at" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_logins" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ip" TEXT,
    "platform" TEXT NOT NULL,
    "location" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_logins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events_tickets" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "events_tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_tokens_userId_key" ON "users_tokens"("userId");

-- AddForeignKey
ALTER TABLE "users_tokens" ADD CONSTRAINT "users_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_logins" ADD CONSTRAINT "users_logins_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events_tickets" ADD CONSTRAINT "events_tickets_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events_tickets" ADD CONSTRAINT "events_tickets_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
