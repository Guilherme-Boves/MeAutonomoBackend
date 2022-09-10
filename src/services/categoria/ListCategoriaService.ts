import prismaClient from "../../prisma";

class ListCategoriaService {
    
    async execute(){

        const categoria = await prismaClient.categoria.findMany({})

        return categoria
    }
}

export { ListCategoriaService }