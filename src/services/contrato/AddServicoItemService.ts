import prismaClient from "../../prisma";

interface AddServicoItemRequest{
    itemContrato_id: string;
    servico_id: string;
}

class AddServicoItemService{
    async execute({itemContrato_id, servico_id}: AddServicoItemRequest){

        if(itemContrato_id === '') {
            throw new Error('Id do contrato inválido')
        }

        if(servico_id === '') {
            throw new Error('Id do serviço inválido')
        }

        const addServico = await prismaClient.itemContratoServico.createMany({
            data:{
                itemContrato_id: itemContrato_id,
                servico_id: servico_id
            }
        })

        return addServico
    }
}

export { AddServicoItemService }