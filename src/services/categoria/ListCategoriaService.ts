import prismaClient from "../../prisma";

class ListCategoriaService {
    
    async execute(){

        const categoria = await prismaClient.categoria.findMany({
            orderBy:{
                nome: 'asc'
            }
        })

        return categoria
    }
}

export { ListCategoriaService }