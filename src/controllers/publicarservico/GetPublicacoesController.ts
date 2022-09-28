import { Request, Response } from "express";
import { GetPublicacoesService } from "../../services/publicarservico/GetPublicacoesService";

class GetPublicacoesController {
    async handle(req: Request, res: Response) {
    
        const user_id = req.user_id

        const getPublicacoesService = new GetPublicacoesService();

        const publicacoes = await getPublicacoesService.execute({
            user_id
        })

        return res.json(publicacoes)

    }
}

export { GetPublicacoesController }