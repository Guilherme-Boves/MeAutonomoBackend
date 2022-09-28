import prismaClient from "../../prisma";

interface PublicarServicoRequest {
    publicacao_id: string;
}

class PublicarServicoService {
    async execute({ publicacao_id }: PublicarServicoRequest){

        const publicacao = await prismaClient.publicarServico.update({
            where:{
                id: publicacao_id
            },
            data:{
                rascunho: false,
                ativo: true,
            }
        })

        return publicacao

    }

}

export { PublicarServicoService }