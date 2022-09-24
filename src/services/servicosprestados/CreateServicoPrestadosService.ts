import prismaClient from "../../prisma";

interface ServicoPrestadosRequest {
    nome: string;
    preco: string;
    item_id: string;
}

class CreateServicoPrestadosService {
    async execute({ nome, preco, item_id }: ServicoPrestadosRequest){
        
        if(nome === ''){
            throw new Error('Invalid Name')
        }
        
        if(preco === ''){
            throw new Error('Invalid price')
        }

        if(item_id === ''){
            throw new Error('Invalid item')
        }

        const servicoPrestadoAlreadyExists = await prismaClient.servicosPrestadosProf.findFirst({
            where:{
                nome: nome
            }
        })

        if(servicoPrestadoAlreadyExists){
            throw new Error("Serviço já cadastrado")
        }
        
        const servicoPrestado = await prismaClient.servicosPrestadosProf.create({
            data:{
                nome: nome,
                preco: preco,
                item_id: item_id
            }
        })
        
        return servicoPrestado
    }
}

export { CreateServicoPrestadosService }