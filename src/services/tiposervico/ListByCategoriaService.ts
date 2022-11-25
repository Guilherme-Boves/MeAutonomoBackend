import prismaClient from "../../prisma";

interface TipoServicoRequest {
    categoria_id: string
}

class ListByCategoriaService {
    async execute({ categoria_id }: TipoServicoRequest){

        const tipoServicos = await prismaClient.tipoDoServico.findMany({
            where:{
                categoria_id: categoria_id
            },
            orderBy:{
                nome: 'asc'
            }
        })

        return tipoServicos
    }
}

export { ListByCategoriaService }