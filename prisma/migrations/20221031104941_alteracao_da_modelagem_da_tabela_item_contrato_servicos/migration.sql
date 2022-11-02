/*
  Warnings:

  - You are about to drop the column `nomePreco` on the `itemsContratoServico` table. All the data in the column will be lost.
  - Added the required column `nome` to the `itemsContratoServico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "itemsContratoServico" DROP COLUMN "nomePreco",
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "preco" DECIMAL(10,2);
