import prismaClient from "../../prisma";

interface ServicoPrestadosRequest {
    nome: string;
    preco: string;
    item_id: string;
}

class CreateServicoPrestadosService {
    async execute({ nome, preco, item_id }: ServicoPrestadosRequest){
        
        if(nome === ''){
            throw new Error('Nome inválido')
        }
        
        if(preco === ''){
            throw new Error('Preço inválido')
        }

        if(item_id === ''){
            throw new Error('Item_id inválido')
        }

        const servicoPrestadoAlreadyExists = await prismaClient.servicosPrestadosProf.findFirst({
            where:{
                nome: nome,
                AND:{
                    item_id: item_id
                }
            }
        })

        if(servicoPrestadoAlreadyExists){
            throw new Error("Serviço já cadastrado")
        }


        
        const servicoPrestado = await prismaClient.servicosPrestadosProf.create({
            data:{
                nome: nome,
                preco: preco.replace(",", "."),
                item_id: item_id
            }
        })
        
        return servicoPrestado
    }
}

export { CreateServicoPrestadosService }