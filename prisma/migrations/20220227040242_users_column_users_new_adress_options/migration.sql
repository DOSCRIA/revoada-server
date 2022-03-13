/*
  Warnings:

  - Added the required column `address_home` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_zip_code` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address_home" TEXT NOT NULL,
ADD COLUMN     "address_zip_code" TEXT NOT NULL;
