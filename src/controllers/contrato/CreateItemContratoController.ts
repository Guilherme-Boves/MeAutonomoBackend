import { Request, Response } from "express";
import { CreateItemContratoService } from "../../services/contrato/CreateItemContratoService";

class CreateItemContratoController {
    async handle(req: Request, res: Response) {

        const { contrato_id, publicacao_id } = req.body;

        const createItemService = new CreateItemContratoService();

        const addServico = await createItemService.execute({
            contrato_id,
            publicacao_id,
        })

        res.json(addServico)
    }
}

export { CreateItemContratoController }