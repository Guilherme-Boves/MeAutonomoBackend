import prismaClient from "../../prisma";

interface PublicarServicoRequest {
    tipoDoServico_id: string;
    descricaoServico: string;
    servicoPrestadosProf_id: string;
    agenda_id: string;
    user_id: string;
}

class CreatePublicarServicoService {
    async execute({ tipoDoServico_id, descricaoServico, servicoPrestadosProf_id, agenda_id, user_id }: PublicarServicoRequest){

        if(tipoDoServico_id === ''){
            throw new Error('Invalid service type')
        }
        
        if(descricaoServico === ''){
            throw new Error('Invalid description')
        }

        if(servicoPrestadosProf_id === ''){
            throw new Error('Invalid service')
        }
        
        if(agenda_id === ''){
            throw new Error('Invalid date')
        }

        if(user_id === ''){
            throw new Error('Invalid user')
        }

        // const servicoAlreadyExists = await prismaClient.publicarServico.findFirst({
        //     where:{
        //         tipoDoServico_id: tipoDoServico_id
        //     }
        // })

        // if(servicoAlreadyExists){
        //     throw new Error("Serviço já existente")
        // }

        const publicarServico = await prismaClient.publicarServico.create({
            data:{
                tipoDoServico_id: tipoDoServico_id,
                descricaoServico: descricaoServico,
                servicoPrestadosProf_id: servicoPrestadosProf_id,
                agenda_id: agenda_id,
                user_id: user_id
            }                        
        })

        return publicarServico
    }
}

export { CreatePublicarServicoService }