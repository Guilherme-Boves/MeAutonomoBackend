import { Request, Response } from 'express';
import { DeleteAvaliacaoService } from '../../services/avaliacao/DeleteAvaliacaoService';

class DeleteAvaliacaoController {
    
    async handle(req: Request, res: Response){

        const { avaliacao_id } = req.body

        const deleteAvaliacaoService = new DeleteAvaliacaoService()

        const avaliacao = await deleteAvaliacaoService.execute({            
            avaliacao_id            
        })

        return res.json(avaliacao)
    }
}

export { DeleteAvaliacaoController }