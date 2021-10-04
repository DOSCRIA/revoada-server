/*
  Warnings:

  - You are about to drop the column `expiresIn` on the `refresh_tokens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "refresh_tokens" DROP COLUMN "expiresIn",
ADD COLUMN     "expires_in" INTEGER NOT NULL DEFAULT 0;
