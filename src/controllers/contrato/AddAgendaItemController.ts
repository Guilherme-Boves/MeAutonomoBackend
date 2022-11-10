import { Request, Response } from "express";
import { AddAgendaItemService } from "../../services/contrato/AddAgendaItemService";

class AddAgendaItemController {
    async handle(req: Request, res: Response) {

        const { contrato_id, itemContrato_id, data, agenda_id } = req.body;

        const addAgendaItemService = new AddAgendaItemService();

        const addAgenda = await addAgendaItemService.execute({
            contrato_id,
            itemContrato_id,
            data,
            agenda_id,
        })

        res.json(addAgenda)
    }
}

export { AddAgendaItemController }