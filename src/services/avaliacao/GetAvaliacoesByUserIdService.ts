import prismaClient from "../../prisma";

interface ListPerfilRequest {
    userProfissional_id: string;    
}

class GetAvaliacoesByUserIdService {
     async execute({ userProfissional_id }: ListPerfilRequest){
        
        if(!userProfissional_id){
            throw new Error("Id do profissional é inválido!")
        }

        const avaliacoes = await prismaClient.itemAvaliacao.findMany({
            where:{
                userProfissional_id: userProfissional_id,
            },
            include:{
                contrato: {
                    include:{
                        userCliente: {
                            select:{
                                nome: true,
                                imagem: true
                            }
                        }
                    }
                },                
            },
            orderBy:{
                created_at: 'asc'            
            } 
        })
        
        return avaliacoes;
        
    }
}

export { GetAvaliacoesByUserIdService }
