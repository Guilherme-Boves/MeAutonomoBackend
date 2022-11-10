import { Request, Response } from 'express';
import { GetAvaliacoesService } from '../../services/avaliacao/GetAvaliacoesService';

class GetAvaliacoesController {
    
    async handle(req: Request, res: Response){
       
        const getAvaliacoesService = new GetAvaliacoesService()

        const avaliacoes = await getAvaliacoesService.execute()

        return res.json(avaliacoes)
    }
}

export { GetAvaliacoesController }