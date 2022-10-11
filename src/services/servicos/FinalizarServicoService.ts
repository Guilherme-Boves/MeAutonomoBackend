import prismaClient from "../../prisma";

interface FinalzarServicoRequest {
    contrato_id: string;
    agenda_id: string
}

class FinalizarServicoService {
    async execute({contrato_id, agenda_id}: FinalzarServicoRequest){

        if(contrato_id === '') {
            throw new Error('Id do contrato inválido')
        }

        if(agenda_id === '') {
            throw new Error('Id da agenda inválido')
        }

        const finalizarContrato = await prismaClient.contratos.update({
            where:{
                id: contrato_id
            },
            data:{
                ativo: false
            }
        })

        const updateStatusAgenda = await prismaClient.agenda.update({
            where:{
                id: agenda_id
            },
            data:{
                status: false
            }
        })

        return {finalizarContrato, updateStatusAgenda}
    }
}

export { FinalizarServicoService }