/*
  Warnings:

  - Added the required column `agenda` to the `itemsContrato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servicoPrestado` to the `itemsContrato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "itemsContrato" ADD COLUMN     "agenda" TEXT NOT NULL,
ADD COLUMN     "servicoPrestado" TEXT NOT NULL;
