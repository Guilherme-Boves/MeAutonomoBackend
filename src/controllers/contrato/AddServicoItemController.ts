import { Request, Response } from "express";
import { AddServicoItemService } from "../../services/contrato/AddServicoItemService";

class AddServicoItemController {
    async handle(req: Request, res: Response) {

        const { itemContrato_id, nomePreco } = req.body;

        const addServicoItemService = new AddServicoItemService();

        const addServico = await addServicoItemService.execute({
            itemContrato_id,
            nomePreco
        })

        res.json(addServico)
    }
}

export { AddServicoItemController }