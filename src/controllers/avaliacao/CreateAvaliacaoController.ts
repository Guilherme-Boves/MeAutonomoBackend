import { Request, Response } from 'express';
import { CreateAvaliacaoService } from '../../services/avaliacao/CreateAvaliacaoService';

class CreateAvaliacaoController {
    
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const createAvaliacaoService = new CreateAvaliacaoService()

        const avaliacao = await createAvaliacaoService.execute({            
            user_id            
        })

        return res.json(avaliacao)
    }
}

export { CreateAvaliacaoController }