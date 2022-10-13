import { Request, Response } from "express";
import { DeleteContratoService } from "../../services/contrato/DeleteContratoService";

class DeleteContratoController {
    async handle(req: Request, res: Response){

        const contrato_id = req.query.contrato_id as string;

        const deleteContratoService = new DeleteContratoService();

        const deleteContrato = await deleteContratoService.execute({
            contrato_id
        })

        res.json(deleteContrato)

    }
}

export { DeleteContratoController }