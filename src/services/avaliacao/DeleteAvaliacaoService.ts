import prismaClient from "../../prisma";

interface AvaliacaoRequest {    
    avaliacao_id: string;
}

class DeleteAvaliacaoService {
    async execute({ avaliacao_id }: AvaliacaoRequest){

        if(!avaliacao_id){
            throw new Error("Id da avaliação é inválida")
        }

        const avaliacao = await prismaClient.avaliacao.delete({
            where:{
                id: avaliacao_id
            }
        })

        return avaliacao
        
    }
}

export { DeleteAvaliacaoService }