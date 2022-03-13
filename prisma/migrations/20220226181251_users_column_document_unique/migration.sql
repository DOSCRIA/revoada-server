/*
  Warnings:

  - A unique constraint covering the columns `[document]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_tokens_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "users_document_key" ON "users"("document");
