import prismaClient from "../../prisma";

interface DeleteCategoriaRequest {
    categoria_id: string;
}

class DeleteCategoriaService{
    async execute({ categoria_id }: DeleteCategoriaRequest){

        const tipoServicoExists = await prismaClient.tipoDoServico.findFirst({
            where:{
                categoria_id: categoria_id
            }
        })

        if(tipoServicoExists){
            throw new Error("Você não pode excluir uma categoria com serviços cadastrados! Exclua os serviços antes de excluir a categoria!")
        }

        const deleteCategoria = await prismaClient.categoria.delete({
            where:{
                id: categoria_id
            }
        })

        return deleteCategoria
    }
}

export { DeleteCategoriaService }