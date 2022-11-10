import prismaClient from "../../prisma";

interface CancelarServicoRequest {
    contrato_id: string;
    itemContrato_id: string;
    agenda_id: string;
}

class CancelarServicoService {
    async execute({ contrato_id, itemContrato_id, agenda_id }: CancelarServicoRequest){
        
        if(!contrato_id || contrato_id === undefined || contrato_id === ''){
            throw new Error("Id do contrato é inválido")
        }

        if(!itemContrato_id || itemContrato_id === undefined || itemContrato_id === ''){
            throw new Error("Id do itemContrato é inválido")
        }

        if(!agenda_id || agenda_id === undefined || agenda_id === ''){
            throw new Error("Id da agenda é inválido")
        }

        const updateStatusAgenda = await prismaClient.agenda.update({
            where:{
                id: agenda_id
            },
            data:{
                status: false
            }
        })

        const deleteServico = await prismaClient.itemContratoServico.deleteMany({
            where:{
                itemContrato_id: itemContrato_id,
            },
        })

        const deleteAgenda = await prismaClient.itemContratoAgenda.deleteMany({
            where: {
                itemContrato_id: itemContrato_id
            }
        })

        const deleteItemContrato = await prismaClient.itemContrato.delete({
            where: {
                id: itemContrato_id,
            },
        })

        const deleteContrato = await prismaClient.contratos.delete({
            where: {
                id: contrato_id
            }
        })

        return {updateStatusAgenda, deleteServico, deleteAgenda, deleteItemContrato, deleteContrato}

    }
}

export { CancelarServicoService }