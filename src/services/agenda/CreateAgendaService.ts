import prismaClient from "../../prisma"

interface AgendaRequest {
    dia: string;
    mes: string;
    horario: string;
    item_id: string
}

class CreateAgendaService {
    
    async execute({ dia, mes, horario, item_id }: AgendaRequest){
        
        if(dia === ''){
            throw new Error('Invalid day')
        }

        if(mes === ''){
            throw new Error('Invalid month')
        }
        
        if(horario === ''){
            throw new Error('Invalid time')
        }

        if(item_id === ''){
            throw new Error('Invalid item')
        }

        const horarioAlreadyExists = await prismaClient.agenda.findFirst({
            where:{
                horario: horario
            }
        })

        if(horarioAlreadyExists){
            throw new Error("Hora já cadastrada")
        } 

        const agenda = await prismaClient.agenda.create({
            data:{
                dia: dia,
                mes: mes,
                horario: horario,
                item_id: item_id
            }
        })

        return agenda;
    }
}

export { CreateAgendaService }