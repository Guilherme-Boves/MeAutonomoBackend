import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'
import { dateFormat } from './CreateUserClienteService';

interface UserRequest {
    nome: string;
    email: string;
    password: string;
    telefone: string;
    dataNascimento: string;
    cnpj: string;
    descricaoSobreMim: string
}

class CreateUserProfissionalService{
    async execute({ nome, email, password, telefone, dataNascimento, cnpj, descricaoSobreMim }: UserRequest){
        
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
                nome: nome,
                email: email,
                password: passwordHash,
                role: "PROFISSIONAL",                
                telefone: telefone,
                dataNascimento: dateFormat(dataNascimento),
                userProfissional: {
                    create:{
                        cnpj: cnpj,
                        descricaoSobreMim: descricaoSobreMim
                    }
                }     
            },
            select:{
                nome: true,
                email: true,
                role: true,
                dataNascimento: true,
                telefone: true,
                userProfissional:{
                    select:{
                        cnpj: true,
                        descricaoSobreMim: true
                    }
                }
            }
        })

        return user;
    }
}

export { CreateUserProfissionalService }