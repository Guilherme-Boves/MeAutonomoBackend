import prismaClient from "../../prisma";

interface UpdateUserInfoClienteRequest {
    user_id: string;
    nome: string;
    telefone: string;
    endereco: string;    
}

class UpdateUserInfoClienteService {
    async execute({user_id, nome, telefone, endereco}: UpdateUserInfoClienteRequest){
        
        if(user_id === ''){
            throw new Error("Id inválido")
        }

        if(nome === ''){
            throw new Error("Nome inválido")
        }

        if(telefone === ''){
            throw new Error("telefone inválido")
        }

        if(endereco === ''){
            throw new Error("Endereço inválido")
        }

        const updateUserInfo = await prismaClient.user.update({
            where:{
                id: user_id,
            },
            data:{
                nome: nome,
                telefone: telefone,
                endereco: endereco,
            },
            select:{
                id: true,
                nome: true,
                telefone: true,
                endereco: true,
            }
        })

        return updateUserInfo
    }
}

export { UpdateUserInfoClienteService }