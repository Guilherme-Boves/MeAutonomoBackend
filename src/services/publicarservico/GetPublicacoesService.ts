import prismaClient from "../../prisma";

interface GetPublicacoesRequest{
    user_id: string;
}

class GetPublicacoesService {
    async execute({ user_id }: GetPublicacoesRequest){

        const publicacoes = await prismaClient.publicarServico.findMany({
            where:{
                user_id: user_id,
                ativo: true,
                rascunho: false,
            },
            include:{
                items: {
                    include:{
                        tipoDoServico: true,
                        servicosPrestadosProf: {
                            orderBy:{
                                nome: 'asc'
                            }
                        },
                        agenda: {
                            orderBy:{
                                data: 'asc'
                            }
                        }
                    }
                }

            }
        })

        return publicacoes
    }
}

export { GetPublicacoesService }