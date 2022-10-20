import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface UserRequest {
    nome: string;
    email: string;
    password: string;    
    telefone: string;
    dataNascimento: string;
    //imagem: string;
    cpf: string;
}

export function dateFormat(str){

    let strToDate = new Date(str)
    let [data, ] = strToDate.toLocaleString("pt-BR").split(' ')

    let splitedData = data.split('/')
    let dia = splitedData[1];
    let mes = splitedData[0];
    let ano = splitedData[2];
   
    let dataFormatada = new Date(`${mes}/${dia}/${ano}`)
    return dataFormatada;   
}

class CreateUserClienteService{
    async execute({ nome, email, password, telefone, dataNascimento, /*imagem,*/ cpf }: UserRequest){
                
        if(email === '' || nome === '' || password === '' || telefone === '' || dataNascimento === '' || cpf === ''){
            throw new Error("Preencha todos os campos!")
        }
        
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Email já cadastrado")
        }

        const cpfAlreadyExists = await prismaClient.userCliente.findFirst({
            where:{
                cpf: cpf
            }
        })

        if(cpfAlreadyExists){
            throw new Error("CPF já cadastrado")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                nome: nome,
                email: email,
                password: passwordHash,
                role: "CLIENTE",                
                telefone: telefone,
                dataNascimento: dateFormat(dataNascimento),
                //imagem: imagem,
                userCliente:{
                    create: {
                        cpf: cpf
                    },
                },       
            },
            select:{
                nome: true,
                email: true,
                role: true,
                dataNascimento: true,
                telefone: true,
                //imagem: true,
                userCliente:{
                    select:{
                        cpf: true
                    }
                }
            }
        })

        return user;
    }
}

export { CreateUserClienteService }