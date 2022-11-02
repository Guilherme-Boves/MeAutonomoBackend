import prismaClient from "../../prisma"

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

        let dataNova = new Date(data).toLocaleString()        
        let aux1 = dataNova.split(' ')
        let aux2 = aux1[0].split("/")
        let dia = aux2[0], mes = aux2[1], ano = aux2[2]
        let dataFormatada = `${ano}-${mes}-${dia}T${aux1[1]}.000Z`

        const horarioAlreadyExists = await prismaClient.agenda.findFirst({
            where:{
               AND: [
                { item_id: item_id },
                { data: dataFormatada },
               ], 
            }
        })

        if(horarioAlreadyExists){
            throw new Error("Data já cadastrada!")
        }

        const agenda = await prismaClient.agenda.create({
            data:{
                data: dataFormatada,
                item_id: item_id
            }
        })

        return agenda;
    }
}

export { CreateAgendaService }