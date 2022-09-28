import prismaClient from "../../prisma";

interface DeletePublicarServicoRequest {
    publicacao_id: string;
}

class DeletePublicarServicoService {
    async execute({ publicacao_id }: DeletePublicarServicoRequest){

        const publicacao = await prismaClient.publicarServico.delete({
            where:{
                id: publicacao_id
            }
        })

        return publicacao
    }
}

export { DeletePublicarServicoService }