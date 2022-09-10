import prismaClient from "../../prisma";

interface ServicoPrestadosRequest {
    nome: string;
    preco: string;
    user_id: string;
}

class CreateServicoPrestadosService {
    async execute({ nome, preco, user_id }: ServicoPrestadosRequest){
        
        if(nome === ''){
            throw new Error('Invalid Name')
        }
        
        if(preco === ''){
            throw new Error('Invalid price')
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
                user_id: user_id
            }
        })
        
        return servicoPrestado
    }
}

export { CreateServicoPrestadosService }