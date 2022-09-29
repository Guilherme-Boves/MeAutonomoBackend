import prismaClient from "../../prisma";

interface ItemRequest {
    descricao: string;
    publicacao_id: string;
    tipoDoServico_id: string;
}

class AddItemService {
    async execute({ descricao, publicacao_id, tipoDoServico_id}: ItemRequest){

        const tipoServico = await prismaClient.item.findFirst({
            where:{
                tipoDoServico_id: tipoDoServico_id
            }
        })

        if(tipoServico) {
            throw new Error('Tipo de serviço já cadastrado!')
        }

        const publicacao = await prismaClient.item.create({
            data:{
                descricao: descricao,
                publicacao_id: publicacao_id,
                tipoDoServico_id: tipoDoServico_id
            }
        })

        return publicacao
    }
}

export { AddItemService }