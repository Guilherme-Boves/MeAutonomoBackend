import { Request, Response } from "express";
import { FinalizarServicoService } from "../../services/servicos/FinalizarServicoService";

class FinalizarServicoController {
    async handle(req: Request, res: Response) {
        
        const { contrato_id, agenda_id } = req.body;

        const finalizarServicoService = new FinalizarServicoService();

        const finalizar = await finalizarServicoService.execute({
            contrato_id,
            agenda_id
        })

        res.json(finalizar)

    }
}

export { FinalizarServicoController }