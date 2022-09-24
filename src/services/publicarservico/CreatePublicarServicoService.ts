import prismaClient from "../../prisma";

interface PublicarServicoRequest {
    user_id: string;
}

class CreatePublicarServicoService {
    async execute({ user_id }: PublicarServicoRequest){
        
        if(user_id === ''){
            throw new Error('Invalid user')
        }

        const publicarServico = await prismaClient.publicarServico.create({
            data:{
                user_id: user_id
            }
        })

        return publicarServico
    }
}

export { CreatePublicarServicoService }