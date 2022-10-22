import prismaClient from "../../prisma";

interface ListCategoriaRequest{
    categoria_id: string;
}

class ListCategoriaByIdService{
    async execute({ categoria_id }: ListCategoriaRequest){
     
        if(categoria_id === ''){
            throw new Error("Id da Categoria é inválido!")
        }

        const categoria = await prismaClient.categoria.findFirst({
            where:{
                id: categoria_id
            }
        })

        return categoria

    }
}

export { ListCategoriaByIdService }