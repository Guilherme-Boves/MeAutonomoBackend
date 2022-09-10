import prismaClient from "../../prisma";

interface TipoServicoRequest {
    nome: string;
    imagem: string;
    categoria_id: string;
}

class CreateTipoServicoService {
    async execute({ nome, imagem, categoria_id }: TipoServicoRequest){
        
        if(nome === ''){
            throw new Error('Invalid Name')
        }
        
        if(imagem === ''){
            throw new Error('Invalid image')
        }

        const tipoServicoAlreadyExists = await prismaClient.tipoDoServico.findFirst({
            where:{
                nome: nome
            }
        })

        if(tipoServicoAlreadyExists){
            throw new Error("Categoria já existente")
        }

        const tipoServico = await prismaClient.tipoDoServico.create({
            data:{
                nome: nome,
                imagem: imagem,
                categoria_id: categoria_id
            }
        })

        return tipoServico

    }
}

export { CreateTipoServicoService }