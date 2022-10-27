import prismaClient from "../../prisma";

interface GetPublicacaoRequest{
    publicacao_id: string;
}

class GetPublicacaoByIdService {
    async execute({ publicacao_id }: GetPublicacaoRequest){

        const publicacao = await prismaClient.publicarServico.findMany({
            where:{
                id: publicacao_id,
                ativo: true,
                rascunho: false,
            },
            include:{
                items: {
                    include:{
                        tipoDoServico: true,
                        servicosPrestadosProf: true,
                        agenda: true
                    }                    
                }

            }
        })

        return publicacao
    }
}

export { GetPublicacaoByIdService }