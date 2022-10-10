import { Request, Response } from "express";
import { AddServicoItemService } from "../../services/contrato/AddServicoItemService";

class AddServicoItemController {
    async handle(req: Request, res: Response) {

        const { itemContrato_id, servico_id } = req.body;

        const addServicoItemService = new AddServicoItemService();

        const addServico = await addServicoItemService.execute({
            itemContrato_id,
            servico_id,
        })

        res.json(addServico)
    }
}

export { AddServicoItemController }