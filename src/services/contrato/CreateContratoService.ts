import prismaClient from "../../prisma";

interface ContratoRequest {
    cliente_id: string;
    profissional_id: string;
}

class CreateContratoService {
    async execute({ cliente_id, profissional_id }: ContratoRequest){

        if(cliente_id === ''){
            throw new Error("ID do cliente inválido")
        }
        
        if(profissional_id === ''){
            throw new Error("ID do profissional inválido")
        }
                
        const contrato = await prismaClient.contratos.create({
            data:{
                userCliente_id: cliente_id,
                userProfissional_id: profissional_id,
            }
        })

        return contrato
    }
}

export { CreateContratoService }