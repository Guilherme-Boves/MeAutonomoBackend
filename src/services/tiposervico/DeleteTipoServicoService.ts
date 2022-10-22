import prismaClient from "../../prisma";

interface DeleteTipoServicoRequest {
    tipoServico_id: string;
}

class DeleteTipoServicoService{
    async execute({ tipoServico_id }: DeleteTipoServicoRequest){

        if(tipoServico_id === ''){
            throw new Error("Id do serviço é inválido!");
        }

        const deleteTipoServico = await prismaClient.tipoDoServico.delete({
            where:{
                id: tipoServico_id
            }
        })

        return deleteTipoServico
    }
}

export { DeleteTipoServicoService }