import prismaClient from "../../prisma";

interface ContratoRequest {
    user_id: string;
    publicarServico_id: string;
}

class CreateContratoService {
    async execute({ user_id, publicarServico_id }: ContratoRequest){

        if(user_id === ''){
            throw new Error("Invalid user")
        }

        if(publicarServico_id === ''){
            throw new Error("Invalid service")
        }

        const contrato = await prismaClient.contratos.create({
            data:{
                user_id: user_id,
                publicarServico_id: publicarServico_id
            }
        })

        return contrato
    }
}

export { CreateContratoService }