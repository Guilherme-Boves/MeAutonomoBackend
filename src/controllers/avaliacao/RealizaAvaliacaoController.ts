import { Request, Response } from 'express';
import { RealizaAvaliacaoService } from '../../services/avaliacao/RealizaAvaliacaoService';

class RealizaAvaliacaoController {
    
    async handle(req: Request, res: Response){

        const { descricao, nota, userProfissional_id, contrato_id, avaliacao_id } = req.body

        const realizaAvaliacaoService = new RealizaAvaliacaoService()

        const avaliacao = await realizaAvaliacaoService.execute({            
            descricao,
            nota,
            userProfissional_id,
            contrato_id,
            avaliacao_id,            
        })

        return res.json(avaliacao)
    }
}

export { RealizaAvaliacaoController }