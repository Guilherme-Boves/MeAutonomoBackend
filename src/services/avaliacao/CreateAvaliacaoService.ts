import prismaClient from "../../prisma";

interface AvaliacaoRequest {    
    user_id: string;
}

class CreateAvaliacaoService {
    async execute({ user_id }: AvaliacaoRequest){

        if(!user_id){
            throw new Error("Usuário inválido")
        }

        const avaliacao = await prismaClient.avaliacao.create({
            data: {
                user_id: user_id
            }
        })

        return avaliacao
        
    }
}

export { CreateAvaliacaoService }