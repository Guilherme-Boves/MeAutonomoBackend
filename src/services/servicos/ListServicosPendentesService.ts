import prismaClient from "../../prisma";

interface ListServicosPendentesRequest {
    user_id: string;        
}

class ListServicosPendentesService {
    async execute({ user_id }: ListServicosPendentesRequest){

        const list = await prismaClient.contratos.findMany({
            where:{
                OR:[
                    {userCliente_id: user_id},
                    {userProfissional_id: user_id}
                ],
                ativo: true,
                rascunho: false
            },
            include: {
                userCliente: {
                    select: {
                        id: true,
                        nome: true,
                    },
                },
                userProfissional: {
                    select: {
                        id: true,
                        nome: true,
                    },
                },
                item: {
                    include:{
                        publicacao: {
                            include: { 
                                user: {
                                    select: { id: true, nome: true }
                                }
                            }
                        },
                        servicos: true,
                        agendas: true
                    },
                },          
            },
            orderBy:{
                created_at: 'asc'
            }
        })

        return list
    }
}

export { ListServicosPendentesService }