import prismaClient from "../../prisma";

interface DeletePublicacaoAtivaRequest{
    publicacao_id: string;
    itemPublicacao_id: string;    
}

class DeletePublicacaoAtivaService {
    async execute({ publicacao_id, itemPublicacao_id }: DeletePublicacaoAtivaRequest){

        if(publicacao_id === '' || publicacao_id === undefined || publicacao_id.length === 0){
            throw new Error("Id da publicação é inválido!")
        }

        if(itemPublicacao_id === '' || itemPublicacao_id === undefined || itemPublicacao_id.length === 0){
            throw new Error("Id da publicação é inválido!")
        }
        
        const deleteServicos = await prismaClient.servicosPrestadosProf.deleteMany({
            where:{
                item_id: itemPublicacao_id
            }
        })

        const deleteAgendas = await prismaClient.agenda.deleteMany({
            where:{
                item_id: itemPublicacao_id
            }
        })

        const deleteItemPublicacao = await prismaClient.item.delete({
            where:{
                id: itemPublicacao_id
            }
        })

        const deletePublicacao = await prismaClient.publicarServico.delete({
            where:{
                id: publicacao_id
            }
        })

        return { deleteServicos, deleteAgendas, deleteItemPublicacao, deletePublicacao }
    }
}

export { DeletePublicacaoAtivaService }