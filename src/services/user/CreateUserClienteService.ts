import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface UserRequest {
    name: string;
    email: string;
    password: string;
}


class CreateUserClienteService{
    async execute({ name, email, password }: UserRequest){
        
        if(!email){
            throw new Error("Email incorreto")
        }
        
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Usuário já existente")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                role: "cliente"
            },
            select:{
                id: true,
                name: true,
                email: true,
                role: true,
            }
        })

        return user;
    }
}

export { CreateUserClienteService }