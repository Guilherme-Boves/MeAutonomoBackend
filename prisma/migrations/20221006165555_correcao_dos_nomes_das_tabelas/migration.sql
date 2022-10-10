/*
  Warnings:

  - You are about to drop the `itemsAgendaServicos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "itemsAgendaServicos" DROP CONSTRAINT "itemsAgendaServicos_agenda_id_fkey";

-- DropForeignKey
ALTER TABLE "itemsAgendaServicos" DROP CONSTRAINT "itemsAgendaServicos_itemContrato_id_fkey";

-- DropTable
DROP TABLE "itemsAgendaServicos";

-- CreateTable
CREATE TABLE "itemsContratoAgenda" (
    "id" TEXT NOT NULL,
    "itemContrato_id" TEXT NOT NULL,
    "agenda_id" TEXT NOT NULL,

    CONSTRAINT "itemsContratoAgenda_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "itemsContratoAgenda" ADD CONSTRAINT "itemsContratoAgenda_itemContrato_id_fkey" FOREIGN KEY ("itemContrato_id") REFERENCES "itemsContrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemsContratoAgenda" ADD CONSTRAINT "itemsContratoAgenda_agenda_id_fkey" FOREIGN KEY ("agenda_id") REFERENCES "agenda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
