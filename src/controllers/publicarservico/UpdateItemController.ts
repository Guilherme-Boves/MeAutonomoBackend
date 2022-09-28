import { Request, Response } from "express";
import { UpdateItemService } from "../../services/publicarservico/UpdateItemService";

class UpdateItemController {
    async handle(req: Request, res: Response){

        const { item_id, descricao, publicacao_id, tipoDoServico_id } = req.body 
      
        const updateItemService = new UpdateItemService();

        const publicacao = await updateItemService.execute({
            item_id,
            descricao,
            publicacao_id,
            tipoDoServico_id
        })

        return res.json(publicacao)
        
    }
}

export { UpdateItemController }