import prismaClient from "../../prisma";

interface AddServicoItemRequest{
    itemContrato_id: string;
    nomePreco: string;
}

class AddServicoItemService{
    async execute({itemContrato_id, nomePreco}: AddServicoItemRequest){

        if(itemContrato_id === '') {
            throw new Error('Id do contrato inválido')
        }

        if(!nomePreco) {
            throw new Error('Nome do serviço ou preço é inválido')
        }

        //Split necessário para separar o nome do preço para armazenar cada valor separado no banco de dados.
        //Entrada nomePreco: "Corte-15"
        let splittedNomePreco = nomePreco.split('-')
        let nome = splittedNomePreco[0]
        let preco = splittedNomePreco[1]
        //Saída: nome: Corte, preco: 35

        const addServico = await prismaClient.itemContratoServico.createMany({
            data:{
                itemContrato_id: itemContrato_id,
                nome: nome,
                preco: Number(preco)
            }
        })

        return addServico
    }
}

export { AddServicoItemService }