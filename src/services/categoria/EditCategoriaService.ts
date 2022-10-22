import prismaClient from "../../prisma";

interface CategoriaRequest {
    categoria_id: string;
    nome: string;
    imagem: string;
}

class EditCategoriaService {

    async execute({ categoria_id, nome, imagem }: CategoriaRequest){

        if(categoria_id === ''){
            throw new Error('Id da categoria é inválido')
        }

        const categoriaAlreadyExists = await prismaClient.categoria.findFirst({
            where:{
                nome: nome
            }
        })

        if(categoriaAlreadyExists){
            throw new Error("Categoria já cadastrada")
        }
        
        if(nome === '' && imagem){
            const categoria = await prismaClient.categoria.update({
                where:{
                    id: categoria_id,
                },
                data:{
                    imagem: imagem
                }
            })

            return categoria
        }
        
        if(nome && imagem === ''){
            const categoria = await prismaClient.categoria.update({
                where:{
                    id: categoria_id,
                },
                data:{
                    nome: nome
                }
            })
            return categoria
        }

        if(nome && imagem){
            const categoria = await prismaClient.categoria.update({
                where:{
                    id: categoria_id,
                },
                data:{
                    nome: nome,
                    imagem: imagem
                }
            })

            return categoria
        }
    }
}

export { EditCategoriaService }