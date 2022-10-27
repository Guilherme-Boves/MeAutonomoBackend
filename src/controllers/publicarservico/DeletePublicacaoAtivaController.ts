import { Request, Response } from "express";
import { DeletePublicacaoAtivaService } from "../../services/publicarservico/DeletePublicacaoAtivaService";

class DeletePublicacaoAtivaController{
    async handle(req: Request, res: Response){

        const { publicacao_id, itemPublicacao_id } = req.body;

        const deletePublicacaoAtivaService = new DeletePublicacaoAtivaService();

        const deletePublicacao = await deletePublicacaoAtivaService.execute({
            publicacao_id,
            itemPublicacao_id
        })

        res.json(deletePublicacao);

    }
}

export { DeletePublicacaoAtivaController }