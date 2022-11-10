/*
  Warnings:

  - You are about to drop the column `contrato_id` on the `avaliacao` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `avaliacao` table. All the data in the column will be lost.
  - You are about to drop the column `nota` on the `avaliacao` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "avaliacao" DROP CONSTRAINT "avaliacao_contrato_id_fkey";

-- AlterTable
ALTER TABLE "avaliacao" DROP COLUMN "contrato_id",
DROP COLUMN "descricao",
DROP COLUMN "nota";

-- CreateTable
CREATE TABLE "itemsAvaliacao" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "nota" DECIMAL(10,2) NOT NULL,
    "userProfissional_id" TEXT NOT NULL,
    "contrato_id" TEXT NOT NULL,
    "avaliacao_id" TEXT NOT NULL,

    CONSTRAINT "itemsAvaliacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "itemsAvaliacao" ADD CONSTRAINT "itemsAvaliacao_contrato_id_fkey" FOREIGN KEY ("contrato_id") REFERENCES "contratos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemsAvaliacao" ADD CONSTRAINT "itemsAvaliacao_avaliacao_id_fkey" FOREIGN KEY ("avaliacao_id") REFERENCES "avaliacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
