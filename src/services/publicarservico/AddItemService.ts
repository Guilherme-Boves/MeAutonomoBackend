import prismaClient from "../../prisma";

interface ItemRequest {
    descricao: string;
    publicacao_id: string;
    tipoDoServico_id: string;
    user_id: string;
}

class AddItemService {
    async execute({ descricao, publicacao_id, tipoDoServico_id, user_id}: ItemRequest){

        // const tipoServico = await prismaClient.item.findFirst({
        //     where:{
        //         tipoDoServico_id: tipoDoServico_id
        //     }
        // })

        // if(tipoServico) {
        //     throw new Error('Serviço já cadastrado!')
        // }

        const servicoAlreadyExists = await prismaClient.item.findFirst({
            where:{
                tipoDoServico_id: tipoDoServico_id,
                AND: {
                    user_id: user_id
                }
            }
        })

        if(servicoAlreadyExists) {
            throw new Error('Serviço já cadastrado!')
        }

        const publicacao = await prismaClient.item.create({
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

export { AddItemService }