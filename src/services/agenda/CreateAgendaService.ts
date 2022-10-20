import prismaClient from "../../prisma"
import { dateFormat } from "../user/CreateUserClienteService";

interface AgendaRequest {
    data: string;
    item_id: string;
}

class CreateAgendaService {
    
    async execute({ data, item_id }: AgendaRequest){
        
        if(data === ''){
            throw new Error('Data Inválida')
        }
        if(item_id === ''){
            throw new Error('Id do Item inválido')
        }

        // const horarioAlreadyExists = await prismaClient.agenda.findFirst({
        //     where:{
        //         horario: horario
        //     }
        // })

        // if(horarioAlreadyExists){
        //     throw new Error("Hora já cadastrada")
        // } 
        console.log(dateFormat(data))
        const agenda = await prismaClient.agenda.create({
            data:{
                data: dateFormat(data),
                item_id: item_id
            }
        })

        return agenda;
    }
}

export { CreateAgendaService }