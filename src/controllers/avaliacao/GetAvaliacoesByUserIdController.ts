import { Request, Response } from 'express';
import { GetAvaliacoesByUserIdService } from '../../services/avaliacao/GetAvaliacoesByUserIdService';

class GetAvaliacoesByUserIdController {
    
    async handle(req: Request, res: Response){

        const userProfissional_id = req.query.userProfissional_id as string;

        const getAvaliacoesService = new GetAvaliacoesByUserIdService()

        const avaliacoes = await getAvaliacoesService.execute({
            userProfissional_id      
        })

        return res.json(avaliacoes)
    }
}

export { GetAvaliacoesByUserIdController }