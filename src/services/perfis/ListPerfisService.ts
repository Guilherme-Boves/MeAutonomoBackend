import prismaClient from "../../prisma";

interface ListPerfisRequest {
    user_id: string;
    tipoServicoId: string;
}

class ListPerfisService {
    async execute({ user_id, tipoServicoId }: ListPerfisRequest){

        const perfis = await prismaClient.item.findMany({
            where:{
                tipoDoServico_id: tipoServicoId,
                NOT:{
                    publicacao: {
                        user: {
                            id: user_id
                        },
                    },
                },
                publicacao:{
                    ativo: true
                }
            },
            include:{
                publicacao: {
                    select: {
                        user: {
                            select:{
                                id: true,
                                nome: true,
                                imagem: true
                            }
                        }
                    }
                }
            },            
        })

        return perfis;

    }
}

export { ListPerfisService }