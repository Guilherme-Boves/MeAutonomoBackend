import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){
       
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        if(user.role === "CLIENTE"){
            const userCliente = await prismaClient.user.findFirst({
                where: {
                    id: user_id,
                },
                select:{
                    id: true,
                    nome: true,
                    email: true,
                    role: true,
                    dataNascimento: true,
                    telefone: true,
                    endereco: true,
                    imagem: true,
                    userCliente: {
                        select:{
                            cpf:true
                        }
                    }
                }
            })
            return userCliente;
        }
        else if(user.role === "PROFISSIONAL"){
            const userProfissional = await prismaClient.user.findFirst({
                where: {
                    id: user_id
                },
                select:{
                    id: true,
                    nome: true,
                    email: true,
                    role: true,
                    telefone: true,
                    dataNascimento: true,
                    endereco: true,
                    imagem: true,
                    userProfissional:{
                        select:{
                            cnpj:true,
                            descricaoSobreMim: true
                        }
                    }           
                }
            })   
            return userProfissional;
        }
        
        return {message:"Not authorized"};
    }
}

export { DetailUserService };