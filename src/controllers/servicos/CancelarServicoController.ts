import { Request, Response } from "express";
import { CancelarServicoService } from "../../services/servicos/CancelarServicoService";

class CancelarServicoController {
    async handle(req: Request, res: Response){

        const contrato_id = req.query.contrato_id as string; 
        const itemContrato_id = req.query.itemContrato_id as string;
        const agenda_id = req.query.agenda_id as string;

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