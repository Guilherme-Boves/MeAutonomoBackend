import prismaClient from "../../prisma";

interface UpdateItemRequest {
    item_id: string;
    descricao: string;
    publicacao_id: string;
    tipoDoServico_id: string;
}

class UpdateItemService {
    
    async execute({ item_id, descricao, publicacao_id, tipoDoServico_id}: UpdateItemRequest){

        const publicacao = await prismaClient.item.update({
            where:{
                id: item_id
            },
            data:{
                descricao: descricao,
                publicacao_id: publicacao_id,
                tipoDoServico_id: tipoDoServico_id
            }
        })

        return publicacao
    }
}

export { UpdateItemService }