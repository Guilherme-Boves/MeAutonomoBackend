import { Request, Response } from "express";
import { ListCategoriaService } from "../../services/categoria/ListCategoriaService";

class ListCategoriaController {
    async handle(req: Request, res: Response){

        const listCagetoriaService = new ListCategoriaService()

        const categoria = await listCagetoriaService.execute()

        return res.json(categoria)
        
    }
}

export { ListCategoriaController }