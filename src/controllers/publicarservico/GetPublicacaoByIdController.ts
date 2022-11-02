import { Request, Response } from "express";
import { GetPublicacaoByIdService } from "../../services/publicarservico/GetPublicacaoByIdService";


class GetPublicacaoByIdController {
    async handle(req: Request, res: Response) {
    
        const publicacao_id = req.query.publicacao_id as string
        
        const getPublicacaoByIdService = new GetPublicacaoByIdService();

        const publicacao = await getPublicacaoByIdService.execute({
            publicacao_id
        })

        return res.json(publicacao)

    }
}

export { GetPublicacaoByIdController }