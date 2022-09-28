import { Request, Response } from "express";
import { DeletePublicarServicoService } from "../../services/publicarservico/DeletePublicarServicoService";

class DeletePublicarServicoController {
    async handle(req: Request, res: Response){

        const publicacao_id = req.query.publicacao_id as string

        const deletePublicarServicoService = new DeletePublicarServicoService();

        const publicacao = await deletePublicarServicoService.execute({
            publicacao_id
        })

        return res.json(publicacao)
        
    }
}

export { DeletePublicarServicoController }