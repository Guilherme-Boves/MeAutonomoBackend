/*
  Warnings:

  - You are about to drop the column `status` on the `itemsContratoAgenda` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `itemsContratoServico` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `itemsContratoServico` table. All the data in the column will be lost.
  - Added the required column `agenda_id` to the `itemsContratoAgenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomePreco` to the `itemsContratoServico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "itemsContratoAgenda" DROP COLUMN "status",
ADD COLUMN     "agenda_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "itemsContratoServico" DROP COLUMN "nome",
DROP COLUMN "preco",
ADD COLUMN     "nomePreco" TEXT NOT NULL;
