import prismaClient from "../../prisma";

interface AvaliacaoRequest {    
    descricao: string;
    nota: string;
    userProfissional_id: string;
    contrato_id: string;
    avaliacao_id: string;
}

class RealizaAvaliacaoService {
    async execute({ descricao, nota, userProfissional_id, contrato_id, avaliacao_id }: AvaliacaoRequest){

        if(!descricao){
            throw new Error("Descrição inválida")
        }

        if(!nota){
            throw new Error("Nota inválida")
        }

        if(!userProfissional_id){
            throw new Error("Id do profissional é inválido")
        }

        if(!contrato_id){
            throw new Error("Id do contrato inválido")
        }

        if(!avaliacao_id){
            throw new Error("Id da Avaliação é inválida")
        }

        const avaliacao = await prismaClient.itemAvaliacao.create({
            data: {
                descricao: descricao,
                nota: nota,
                userProfissional_id: userProfissional_id,
                contrato_id: contrato_id,
                avaliacao_id: avaliacao_id
            }
        })

        const updateAvalicao = await prismaClient.contratos.update({
            where:{
                id: contrato_id
            },
            data:{
                avaliacao: true
            }
        })

        return { avaliacao, updateAvalicao }
        
    }
}

export { RealizaAvaliacaoService }