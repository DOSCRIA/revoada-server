-- CreateTable
CREATE TABLE "users_tickets" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "users_tickets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_tickets" ADD CONSTRAINT "users_tickets_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_tickets" ADD CONSTRAINT "users_tickets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
