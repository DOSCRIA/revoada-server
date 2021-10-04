/*
  Warnings:

  - You are about to drop the `Tickets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Tickets";

-- CreateTable
CREATE TABLE "tickets" (
    "id" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "companyId" TEXT NOT NULL,
    "purchaseLimit" INTEGER NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_tickets" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "users_tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tickets_companyId_unique" ON "tickets"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "users_tickets_ticketId_unique" ON "users_tickets"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "users_tickets_userId_unique" ON "users_tickets"("userId");

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_tickets" ADD CONSTRAINT "users_tickets_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_tickets" ADD CONSTRAINT "users_tickets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
