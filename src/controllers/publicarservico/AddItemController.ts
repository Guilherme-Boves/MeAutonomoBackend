import { Request, Response } from "express";
import { AddItemService } from "../../services/publicarservico/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        
        const user_id = req.user_id
        const { descricao, publicacao_id, tipoDoServico_id } = req.body;

        const addItem = new AddItemService();

        const publicacao = await addItem.execute({
            descricao,
            publicacao_id,
            tipoDoServico_id,
            user_id
        })

        return res.json(publicacao)
    }
}

export { AddItemController }