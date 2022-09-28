import prismaClient from "../../prisma";

interface DeleteAgendaRequest {
    agenda_id: string;
}

class DeleteAgendaService {
    async execute({agenda_id}: DeleteAgendaRequest){
        
        const agenda = await prismaClient.agenda.delete({
            where:{
                id: agenda_id
            }
        })

        return agenda
    }
}

export { DeleteAgendaService }