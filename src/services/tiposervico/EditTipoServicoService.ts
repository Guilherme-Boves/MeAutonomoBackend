import prismaClient from "../../prisma";

interface TipoServicoRequest {
    tipoServico_id: string;
    nome: string;
    imagem: string;
}

class EditTipoServicoService {

    async execute({ tipoServico_id, nome, imagem }: TipoServicoRequest){

        if(tipoServico_id === ''){
            throw new Error('Id do serviço é inválido')
        }

        const servicoAlreadyExists = await prismaClient.tipoDoServico.findFirst({
            where:{
                nome: nome
            }
        })

        if(servicoAlreadyExists){
            throw new Error("Serviço já cadastrado")
        }
        
        if(nome === '' && imagem){
            const servico = await prismaClient.tipoDoServico.update({
                where:{
                    id: tipoServico_id,
                },
                data:{
                    imagem: imagem
                }
            })

            return servico
        }
        
        if(nome && imagem === ''){
            const servico = await prismaClient.tipoDoServico.update({
                where:{
                    id: tipoServico_id,
                },
                data:{
                    nome: nome
                }
            })
            return servico
        }

        if(nome && imagem){
            const servico = await prismaClient.tipoDoServico.update({
                where:{
                    id: tipoServico_id,
                },
                data:{
                    nome: nome,
                    imagem: imagem
                }
            })

            return servico
        }
    }
}

export { EditTipoServicoService }