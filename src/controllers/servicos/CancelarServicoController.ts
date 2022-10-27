import { Request, Response } from "express";
import { CancelarServicoService } from "../../services/servicos/CancelarServicoService";

class CancelarServicoController {
    async handle(req: Request, res: Response){

        const { contrato_id, itemContrato_id, agenda_id } = req.body;

        const cancelarServicoService = new CancelarServicoService();

        const cancelarServico = await cancelarServicoService.execute({
            contrato_id,
            itemContrato_id, 
            agenda_id,
        })

        res.json(cancelarServico)
    }
}

export { CancelarServicoController }