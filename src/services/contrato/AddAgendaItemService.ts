import prismaClient from "../../prisma";

interface AddAgendaItemRequest{
    contrato_id: string;
    itemContrato_id: string;
    data: string;
    agenda_id: string;
}

class AddAgendaItemService {
    async execute({contrato_id, itemContrato_id, data, agenda_id}: AddAgendaItemRequest){

        if(!contrato_id) {
            throw new Error('Id do contrato inválido')
        }

        if(!itemContrato_id) {
            throw new Error('Id do ItemContrato inválido')
        }

        if(!agenda_id) {
            throw new Error('Id da agenda inválido')
        }

        const addServico = await prismaClient.itemContratoAgenda.create({
            data:{
                itemContrato_id: itemContrato_id,
                data: data,
                agenda_id: agenda_id
            }
        })

        const updateStatusAgenda = await prismaClient.agenda.update({
            where:{
                id: agenda_id,
            },
            data:{
                status: true
            }
        })

        const updateContrateCreatedAtDate = await prismaClient.contratos.update({
            where:{
                id: contrato_id
            },
            data:{
                created_at: data
            }
        })

        return {addServico, updateStatusAgenda, updateContrateCreatedAtDate}
    }
}

export { AddAgendaItemService }