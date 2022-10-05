import prismaClient from "../../prisma";

interface UpdateUserInfoProfissionalRequest {
    user_id: string;
    nome: string;
    telefone: string;
    cnpj: string;
    endereco: string;
    descricaoSobreMim: string;
}

class UpdateUserInfoProfissionalService {
    async execute({user_id, nome, telefone, endereco, cnpj, descricaoSobreMim}: UpdateUserInfoProfissionalRequest){
        
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

        if(cnpj === ''){
            throw new Error("Cnpj inválido")
        }

        const updateUserInfo = await prismaClient.user.update({
            where:{
                id: user_id,
            },
            data:{
                nome: nome,
                telefone: telefone,
                endereco: endereco,
                userProfissional:{
                    update:{
                        where:{
                            cnpj: cnpj,
                        },
                        data:{
                            descricaoSobreMim: descricaoSobreMim
                        }
                    }
                },            
            },
            select:{
                id: true,
                nome: true,
                telefone: true,
                endereco: true,
                userProfissional:{
                    select:{
                        descricaoSobreMim: true
                    }
                }
            }
        })

        return updateUserInfo
    }
}

export { UpdateUserInfoProfissionalService }