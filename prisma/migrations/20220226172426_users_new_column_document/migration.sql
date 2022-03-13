/*
  Warnings:

  - Added the required column `document` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "document" TEXT NOT NULL;
