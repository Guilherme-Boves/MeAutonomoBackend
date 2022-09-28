import { Request, Response } from "express";
import { PublicarServicoService } from "../../services/publicarservico/PublicarServicoService";

class PublicarServicoController {
    async handle(req: Request, res: Response) {

        const { publicacao_id }  = req.body

        const publicarServicoService = new PublicarServicoService()

        const publicarServico = await publicarServicoService.execute({
            publicacao_id
        })

        return res.json(publicarServico)
    }
}

export { PublicarServicoController }