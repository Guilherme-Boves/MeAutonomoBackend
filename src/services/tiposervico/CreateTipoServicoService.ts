import prismaClient from "../../prisma";

interface TipoServicoRequest {
    nome: string;
    imagem: string;
    categoria_id: string;
}

class CreateTipoServicoService {
    async execute({ nome, imagem, categoria_id }: TipoServicoRequest){
        
        if(nome === ''){
            throw new Error('Nome inválido')
        }
        
        if(imagem === ''){
            throw new Error('Imagem inválida')
        }

        const tipoServicoAlreadyExists = await prismaClient.tipoDoServico.findFirst({
            where:{
                nome: nome
            }
        })

        if(tipoServicoAlreadyExists){
            throw new Error("Tipo de serviço já cadastrado")
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