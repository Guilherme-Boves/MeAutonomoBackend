import { Request, Response } from 'express';
import { DeleteAgendaService } from '../../services/agenda/DeleteAgendaService';

class DeleteAgendaController {
    async handle(req: Request, res: Response) {

        const agenda_id = req.query.agenda_id as string;

        const deleteAgendaService = new DeleteAgendaService();

        const agenda = await deleteAgendaService.execute({
            agenda_id
        })

        return res.json(agenda)

    }
}

export { DeleteAgendaController }