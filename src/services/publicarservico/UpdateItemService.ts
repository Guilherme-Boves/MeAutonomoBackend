import prismaClient from "../../prisma";

interface UpdateItemRequest {
    item_id: string;
    descricao: string;
    publicacao_id: string;
    tipoDoServico_id: string;
    user_id: string;
}

class UpdateItemService {
    
    async execute({ item_id, descricao, publicacao_id, tipoDoServico_id, user_id}: UpdateItemRequest){

        if(!item_id){
            throw new Error("Não foi possível atualizar as informações! Item_id não encontrado")
        }

        if(!descricao){
            throw new Error("Insira uma descrição!")
        }

        if(!publicacao_id){
            throw new Error("Não foi possível atualizar as informações! Publicacao_id não encontrada")
        }

        if(!tipoDoServico_id){
            throw new Error("Não foi possível atualizar as informações! TipoDoServico_id não encontrado")
        }

        if(!user_id){
            throw new Error("Não foi possível atualizar as informações! User_id não encontrado")
        }

        const publicacao = await prismaClient.item.update({
            where:{
                id: item_id
            },
            data:{
                descricao: descricao,
                publicacao_id: publicacao_id,
                tipoDoServico_id: tipoDoServico_id,
                user_id: user_id
            }
        })

        return publicacao
    }
}

export { UpdateItemService }