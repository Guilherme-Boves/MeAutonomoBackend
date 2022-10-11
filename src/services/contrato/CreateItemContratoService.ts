import prismaClient from "../../prisma";

interface CreatItemServiceRequest{
    contrato_id: string;
    publicacao_id: string;
}

class CreateItemContratoService{
    async execute({contrato_id, publicacao_id}: CreatItemServiceRequest){

        if(contrato_id === '') {
            throw new Error('Id do contrato inválido')
        }

        if(publicacao_id === '') {
            throw new Error('Id da publicação inválido')
        }

        const createItemContrato = await prismaClient.itemContrato.create({
            data:{
                contrato_id: contrato_id,
                publicacao_id: publicacao_id
            }
        })

        const updateStatusContrato =await prismaClient.contratos.update({
            where:{
                id: contrato_id,
            },
            data:{
                ativo: true,
                rascunho: false
            }
        })

        return {createItemContrato, updateStatusContrato}
    }
}

export { CreateItemContratoService }