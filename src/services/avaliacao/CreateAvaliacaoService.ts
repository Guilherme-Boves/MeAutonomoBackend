import prismaClient from "../../prisma";

interface AvaliacaoRequest {
    descricao: string;
    nota: number;
    user_id: string;
    contrato_id: string;
}

class CreateAvaliacaoService {
    async execute({ descricao, nota, user_id, contrato_id }: AvaliacaoRequest){

        if(descricao === ''){
            throw new Error("Invalid description")
        }

        if(nota === null){
            throw new Error("Invalid grade")
        }
        
        if(nota < 0 || nota > 10){
            throw new Error("Only grades from 0 to 10")
        }

        if(user_id === ''){
            throw new Error("Invalid user")
        }

        if(contrato_id === ''){
            throw new Error("Invalid contract")
        }

        const avaliacao = await prismaClient.avaliacao.create({
            data: {
                descricao: descricao,
                nota: Number(nota),
                user_id: user_id,
                contrato_id: contrato_id
            }
        })

        return avaliacao
        
    }
}

export { CreateAvaliacaoService }