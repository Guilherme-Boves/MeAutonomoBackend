import prismaClient from "../../prisma";

interface ListServicosFinalizadosRequest {
    user_id: string;
}

class ListServicosFinalizadosService {
    async execute({ user_id }: ListServicosFinalizadosRequest){

        const list = await prismaClient.contratos.findMany({
            where:{
                OR:[
                    {userCliente_id: user_id},
                    {userProfissional_id: user_id}
                ],
                ativo: false,
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
                        servicos: {
                            include:{ servicos: true }
                        },
                        agendas: {
                            include: { agendas: true }
                        }
                    }
                },          
            }
        })

        return list
    }
}

export { ListServicosFinalizadosService }