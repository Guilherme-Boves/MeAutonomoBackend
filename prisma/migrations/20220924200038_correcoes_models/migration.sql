/*
  Warnings:

  - You are about to drop the column `user_id` on the `agenda` table. All the data in the column will be lost.
  - You are about to drop the column `agenda_id` on the `publicarServico` table. All the data in the column will be lost.
  - You are about to drop the column `descricaoServico` on the `publicarServico` table. All the data in the column will be lost.
  - You are about to drop the column `servicoPrestadosProf_id` on the `publicarServico` table. All the data in the column will be lost.
  - You are about to drop the column `tipoDoServico_id` on the `publicarServico` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `servicosPrestadosProf` table. All the data in the column will be lost.
  - Added the required column `item_id` to the `agenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item_id` to the `servicosPrestadosProf` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "agenda" DROP CONSTRAINT "agenda_user_id_fkey";

-- DropForeignKey
ALTER TABLE "publicarServico" DROP CONSTRAINT "publicarServico_agenda_id_fkey";

-- DropForeignKey
ALTER TABLE "publicarServico" DROP CONSTRAINT "publicarServico_servicoPrestadosProf_id_fkey";

-- DropForeignKey
ALTER TABLE "publicarServico" DROP CONSTRAINT "publicarServico_tipoDoServico_id_fkey";

-- DropForeignKey
ALTER TABLE "servicosPrestadosProf" DROP CONSTRAINT "servicosPrestadosProf_user_id_fkey";

-- AlterTable
ALTER TABLE "agenda" DROP COLUMN "user_id",
ADD COLUMN     "item_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "publicarServico" DROP COLUMN "agenda_id",
DROP COLUMN "descricaoServico",
DROP COLUMN "servicoPrestadosProf_id",
DROP COLUMN "tipoDoServico_id",
ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "rascunho" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "servicosPrestadosProf" DROP COLUMN "user_id",
ADD COLUMN     "item_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "imagem" TEXT;

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "publicacao_id" TEXT NOT NULL,
    "tipoDoServico_id" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "servicosPrestadosProf" ADD CONSTRAINT "servicosPrestadosProf_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda" ADD CONSTRAINT "agenda_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_publicacao_id_fkey" FOREIGN KEY ("publicacao_id") REFERENCES "publicarServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_tipoDoServico_id_fkey" FOREIGN KEY ("tipoDoServico_id") REFERENCES "tipoDoServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
