/*
  Warnings:

  - You are about to drop the column `dia` on the `agenda` table. All the data in the column will be lost.
  - You are about to drop the column `horario` on the `agenda` table. All the data in the column will be lost.
  - You are about to drop the column `mes` on the `agenda` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `contratos` table. All the data in the column will be lost.
  - The `preco` column on the `servicosPrestadosProf` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `dataNascimento` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "agenda" DROP CONSTRAINT "agenda_item_id_fkey";

-- DropForeignKey
ALTER TABLE "contratos" DROP CONSTRAINT "contratos_user_id_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_publicacao_id_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_tipoDoServico_id_fkey";

-- DropForeignKey
ALTER TABLE "servicosPrestadosProf" DROP CONSTRAINT "servicosPrestadosProf_item_id_fkey";

-- AlterTable
ALTER TABLE "agenda" DROP COLUMN "dia",
DROP COLUMN "horario",
DROP COLUMN "mes",
ADD COLUMN     "data" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "contratos" DROP COLUMN "user_id",
ADD COLUMN     "userCliente_id" TEXT NOT NULL DEFAULT '4324',
ADD COLUMN     "userProfissional_id" TEXT NOT NULL DEFAULT '321312';

-- AlterTable
ALTER TABLE "servicosPrestadosProf" DROP COLUMN "preco",
ADD COLUMN     "preco" DECIMAL(10,2);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "dataNascimento" SET NOT NULL;

-- DropTable
DROP TABLE "items";

-- CreateTable
CREATE TABLE "itemsPublicacao" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "publicacao_id" TEXT NOT NULL,
    "tipoDoServico_id" TEXT NOT NULL,

    CONSTRAINT "itemsPublicacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "servicosPrestadosProf" ADD CONSTRAINT "servicosPrestadosProf_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "itemsPublicacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda" ADD CONSTRAINT "agenda_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "itemsPublicacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemsPublicacao" ADD CONSTRAINT "itemsPublicacao_publicacao_id_fkey" FOREIGN KEY ("publicacao_id") REFERENCES "publicarServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemsPublicacao" ADD CONSTRAINT "itemsPublicacao_tipoDoServico_id_fkey" FOREIGN KEY ("tipoDoServico_id") REFERENCES "tipoDoServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratos" ADD CONSTRAINT "contratos_userCliente_id_fkey" FOREIGN KEY ("userCliente_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratos" ADD CONSTRAINT "contratos_userProfissional_id_fkey" FOREIGN KEY ("userProfissional_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
