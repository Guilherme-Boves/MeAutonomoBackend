import prismaClient from "../../prisma";

interface ListTipoServicoRequest{
    tipoServico_id: string;
}

class ListTipoServicoByIdService{
    async execute({ tipoServico_id }: ListTipoServicoRequest){
     
        if(tipoServico_id === ''){
            throw new Error("Id do serviço é inválido!")
        }

        const servico = await prismaClient.tipoDoServico.findFirst({
            where:{
                id: tipoServico_id
            }
        })
        return servico
    }
}

export { ListTipoServicoByIdService }