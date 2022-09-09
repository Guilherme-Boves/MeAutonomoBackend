import prismaClient from "../../prisma";

interface CategoriaRequest {
    nome: string;
    imagem: string;
}

class CreateCategoriaService {

    async execute({ nome, imagem }: CategoriaRequest){
        
        const categoria = prismaClient.categoria.create({
            data:{
                nome: nome,
                imagem: imagem
            }
        })
        return categoria
    }
}

export { CreateCategoriaService }