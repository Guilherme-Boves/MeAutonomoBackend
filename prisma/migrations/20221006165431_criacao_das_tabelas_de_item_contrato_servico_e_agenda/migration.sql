/*
  Warnings:

  - You are about to drop the column `agenda` on the `itemsContrato` table. All the data in the column will be lost.
  - You are about to drop the column `servicoPrestado` on the `itemsContrato` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "itemsContrato" DROP COLUMN "agenda",
DROP COLUMN "servicoPrestado";

-- CreateTable
CREATE TABLE "itemsContratoServico" (
    "id" TEXT NOT NULL,
    "itemContrato_id" TEXT NOT NULL,
    "servico_id" TEXT NOT NULL,

    CONSTRAINT "itemsContratoServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itemsAgendaServicos" (
    "id" TEXT NOT NULL,
    "itemContrato_id" TEXT NOT NULL,
    "agenda_id" TEXT NOT NULL,

    CONSTRAINT "itemsAgendaServicos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "itemsContratoServico" ADD CONSTRAINT "itemsContratoServico_itemContrato_id_fkey" FOREIGN KEY ("itemContrato_id") REFERENCES "itemsContrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemsContratoServico" ADD CONSTRAINT "itemsContratoServico_servico_id_fkey" FOREIGN KEY ("servico_id") REFERENCES "servicosPrestadosProf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemsAgendaServicos" ADD CONSTRAINT "itemsAgendaServicos_itemContrato_id_fkey" FOREIGN KEY ("itemContrato_id") REFERENCES "itemsContrato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemsAgendaServicos" ADD CONSTRAINT "itemsAgendaServicos_agenda_id_fkey" FOREIGN KEY ("agenda_id") REFERENCES "agenda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
