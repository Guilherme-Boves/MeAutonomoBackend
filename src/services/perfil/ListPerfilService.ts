import prismaClient from "../../prisma";

interface ListPerfilRequest {
    perfil_id: string;
    tipoServico_id: string;
}

class ListPerfilService {
    async execute({ perfil_id, tipoServico_id }: ListPerfilRequest){

        const perfil = await prismaClient.item.findMany({
            where:{
                tipoDoServico_id: tipoServico_id,
                publicacao:{
                    user_id: perfil_id
                }
            },
            include:{
                publicacao: {
                    include:{
                        user: {
                            select:{
                                id: true,
                                nome: true,
                                imagem: true,
                                userProfissional: {
                                    select:{
                                        descricaoSobreMim: true,
                                    },
                                },
                            }
                        },
                    },
                },
                tipoDoServico: true,
                servicosPrestadosProf: true,
                agenda: true
            }
        })
        return perfil;
        
    }
}

export { ListPerfilService }
