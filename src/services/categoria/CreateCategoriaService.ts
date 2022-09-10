import prismaClient from "../../prisma";

interface CategoriaRequest {
    nome: string;
    imagem: string;
}

class CreateCategoriaService {

    async execute({ nome, imagem }: CategoriaRequest){

        if(nome === ''){
            throw new Error('Invalid Name')
        }
        
        if(imagem === ''){
            throw new Error('Invalid image')
        }

        const categoriaAlreadyExists = await prismaClient.categoria.findFirst({
            where:{
                nome: nome
            }
        })

        if(categoriaAlreadyExists){
            throw new Error("Categoria já existente")
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