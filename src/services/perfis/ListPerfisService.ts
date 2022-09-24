import prismaClient from "../../prisma";

interface ListPerfisRequest {
    tipoServicoId: string;
}

class ListPerfisService {
    async execute({ tipoServicoId }: ListPerfisRequest){

        const perfis = await prismaClient.item.findMany({
            where:{
                tipoDoServico_id: tipoServicoId,
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