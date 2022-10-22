import { Request, Response } from "express";
import { ListCategoriaByIdService } from "../../services/categoria/ListCategoriaByIdService";

class ListCategoriaByIdController{
    async handle(req: Request, res: Response){

        const categoria_id = req.query.categoria_id as string;

        const listCategoriaByIdService = new ListCategoriaByIdService();

        const lista = await listCategoriaByIdService.execute({
            categoria_id
        })

        res.json(lista)
    }
}

export { ListCategoriaByIdController }