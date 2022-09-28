import prismaClient from "../../prisma";

interface DeleteServicoPrestadoRequest {
    servico_id: string
}

class DeleteServicoPrestadoService {
    async execute({servico_id}: DeleteServicoPrestadoRequest){

        const servico = await prismaClient.servicosPrestadosProf.delete({
            where:{
                id: servico_id
            }
        })
        
        return servico
    }
}

export { DeleteServicoPrestadoService }