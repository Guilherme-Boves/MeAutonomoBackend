/*
  Warnings:

  - You are about to drop the column `publicarServico_id` on the `contratos` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `contratos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "contratos" DROP CONSTRAINT "contratos_publicarServico_id_fkey";

-- AlterTable
ALTER TABLE "contratos" DROP COLUMN "publicarServico_id",
DROP COLUMN "status",
ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "rascunho" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "itemsContrato" (
    "id" TEXT NOT NULL,
    "contrato_id" TEXT NOT NULL,
    "publicacao_id" TEXT NOT NULL,

    CONSTRAINT "itemsContrato_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "itemsContrato" ADD CONSTRAINT "itemsContrato_contrato_id_fkey" FOREIGN KEY ("contrato_id") REFERENCES "contratos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemsContrato" ADD CONSTRAINT "itemsContrato_publicacao_id_fkey" FOREIGN KEY ("publicacao_id") REFERENCES "publicarServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
