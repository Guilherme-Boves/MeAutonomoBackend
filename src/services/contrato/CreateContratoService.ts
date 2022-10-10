import prismaClient from "../../prisma";

interface ContratoRequest {
    user_id: string;
}

class CreateContratoService {
    async execute({ user_id }: ContratoRequest){

        if(user_id === ''){
            throw new Error("Invalid user")
        }

        const contrato = await prismaClient.contratos.create({
            data:{
                user_id: user_id
            }
        })

        return contrato
    }
}

export { CreateContratoService }