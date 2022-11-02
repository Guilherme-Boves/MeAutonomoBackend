/*
  Warnings:

  - You are about to drop the column `agenda_id` on the `itemsContratoAgenda` table. All the data in the column will be lost.
  - You are about to drop the column `servico_id` on the `itemsContratoServico` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "itemsContratoAgenda" DROP CONSTRAINT "itemsContratoAgenda_agenda_id_fkey";

-- DropForeignKey
ALTER TABLE "itemsContratoServico" DROP CONSTRAINT "itemsContratoServico_servico_id_fkey";

-- AlterTable
ALTER TABLE "contratos" ALTER COLUMN "userCliente_id" DROP DEFAULT,
ALTER COLUMN "userProfissional_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "itemsContratoAgenda" DROP COLUMN "agenda_id",
ADD COLUMN     "data" TIMESTAMP(3),
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "itemsContratoServico" DROP COLUMN "servico_id",
ADD COLUMN     "nome" TEXT NOT NULL DEFAULT 'Corte',
ADD COLUMN     "preco" DECIMAL(10,2);
