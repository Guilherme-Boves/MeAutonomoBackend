import prismaClient from "../../prisma";

interface ListPerfisRequest {
    tipoServicoId: string;
}

class ListPerfisService {
    async execute({ tipoServicoId }: ListPerfisRequest){

        console.log(tipoServicoId)
        const perfis = await prismaClient.publicarServico.findMany({
            where:{
                tipoDoServico_id: tipoServicoId
            },
            include:{
                user: {
                    select:{
                        id: true,
                        nome: true,
                    }
                },
            }
        })

        return perfis;

    }
}

export { ListPerfisService }