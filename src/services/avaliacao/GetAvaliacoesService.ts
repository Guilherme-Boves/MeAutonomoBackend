import prismaClient from "../../prisma";

class GetAvaliacoesService {    
    async execute(){
        
        const avaliacoes = await prismaClient.itemAvaliacao.findMany({})
        return avaliacoes;
        
    }
}

export { GetAvaliacoesService }
