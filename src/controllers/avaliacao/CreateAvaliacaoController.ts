import { Request, Response } from 'express';
import { CreateAvaliacaoService } from '../../services/avaliacao/CreateAvaliacaoService';

class CreateAvaliacaoController {
    
    async handle(req: Request, res: Response){

        const { descricao, nota, user_id, contrato_id } = req.body

        const createAvaliacaoService = new CreateAvaliacaoService()

        const avaliacao = await createAvaliacaoService.execute({
            descricao,
            nota,
            user_id,
            contrato_id
        })

        return res.json(avaliacao)
    }
}

export { CreateAvaliacaoController }