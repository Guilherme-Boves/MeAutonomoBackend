import prismaClient from "../../prisma";

interface DeleteContratoRequest {
    contrato_id: string;
}

class DeleteContratoService {
    async execute({ contrato_id }: DeleteContratoRequest){

        if(contrato_id === ''){
            throw new Error('Id do controto inválido');
        }

        const deleteContrato = await prismaClient.contratos.delete({
            where:{
                id: contrato_id
            }
        })

        return deleteContrato;
    }
}

export { DeleteContratoService }