import prismaClient from "../../prisma";

interface AddAgendaItemRequest{
    itemContrato_id: string;
    agenda_id: string;
}

class AddAgendaItemService {
    async execute({itemContrato_id, agenda_id}: AddAgendaItemRequest){

        if(itemContrato_id === '') {
            throw new Error('Id do contrato inválido')
        }

        if(agenda_id === '') {
            throw new Error('Id da agenda inválido')
        }

        const addServico = await prismaClient.itemContratoAgenda.create({
            data:{
                itemContrato_id: itemContrato_id,
                agenda_id: agenda_id
            }
        })

        await prismaClient.agenda.update({
            where:{
                id: agenda_id,
            },
            data:{
                status: true
            }
        })

        return addServico
    }
}

export { AddAgendaItemService }