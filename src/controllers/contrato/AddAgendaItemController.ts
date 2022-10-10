import { Request, Response } from "express";
import { AddAgendaItemService } from "../../services/contrato/AddAgendaItemService";

class AddAgendaItemController {
    async handle(req: Request, res: Response) {

        const { itemContrato_id, agenda_id } = req.body;

        const addAgendaItemService = new AddAgendaItemService();

        const addAgenda = await addAgendaItemService.execute({
            itemContrato_id,
            agenda_id,
        })

        res.json(addAgenda)
    }
}

export { AddAgendaItemController }