import prismaClient from "../../prisma";

interface CategoriaRequest {
    nome: string;
    imagem: string;
}

class CreateCategoriaService {

    async execute({ nome, imagem }: CategoriaRequest){

        if(nome === ''){
            throw new Error('Nome da categoria inválido')
        }
        
        if(imagem === ''){
            throw new Error('Imagem inválida')
        }

        const categoriaAlreadyExists = await prismaClient.categoria.findFirst({
            where:{
                nome: nome
            }
        })

        if(categoriaAlreadyExists){
            throw new Error("Categoria já cadastrada")
        }
        
        const categoria = await prismaClient.categoria.create({
            data:{
                nome: nome,
                imagem: imagem
            }
        })
        return categoria
    }
}

export { CreateCategoriaService }