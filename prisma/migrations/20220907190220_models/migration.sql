/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dataNascimento` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "name",
ADD COLUMN     "dataNascimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "telefone" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "userCliente" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "userCliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userProfissional" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "descricaoSobreMim" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "userProfissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servicosPrestadosProf" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "servicosPrestadosProf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agenda" (
    "id" TEXT NOT NULL,
    "dia" INTEGER NOT NULL,
    "mes" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "agenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoDoServico" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "categoria_id" TEXT NOT NULL,

    CONSTRAINT "tipoDoServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publicarServico" (
    "id" TEXT NOT NULL,
    "descricaoServico" TEXT NOT NULL,
    "tipoDoServico_id" TEXT NOT NULL,
    "servicoPrestadosProf_id" TEXT NOT NULL,
    "agenda_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "publicarServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contratos" (
    "id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "publicarServico_id" TEXT NOT NULL,

    CONSTRAINT "contratos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacao" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "contrato_id" TEXT NOT NULL,

    CONSTRAINT "avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userCliente_cpf_key" ON "userCliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "userProfissional_cnpj_key" ON "userProfissional"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "userCliente" ADD CONSTRAINT "userCliente_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userProfissional" ADD CONSTRAINT "userProfissional_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicosPrestadosProf" ADD CONSTRAINT "servicosPrestadosProf_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agenda" ADD CONSTRAINT "agenda_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipoDoServico" ADD CONSTRAINT "tipoDoServico_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publicarServico" ADD CONSTRAINT "publicarServico_tipoDoServico_id_fkey" FOREIGN KEY ("tipoDoServico_id") REFERENCES "tipoDoServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publicarServico" ADD CONSTRAINT "publicarServico_servicoPrestadosProf_id_fkey" FOREIGN KEY ("servicoPrestadosProf_id") REFERENCES "servicosPrestadosProf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publicarServico" ADD CONSTRAINT "publicarServico_agenda_id_fkey" FOREIGN KEY ("agenda_id") REFERENCES "agenda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publicarServico" ADD CONSTRAINT "publicarServico_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratos" ADD CONSTRAINT "contratos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratos" ADD CONSTRAINT "contratos_publicarServico_id_fkey" FOREIGN KEY ("publicarServico_id") REFERENCES "publicarServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_contrato_id_fkey" FOREIGN KEY ("contrato_id") REFERENCES "contratos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
