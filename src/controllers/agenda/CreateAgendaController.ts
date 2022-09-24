import { Request, Response } from 'express'
import { CreateAgendaService } from '../../services/agenda/CreateAgendaService'

class CreateAgendaController {

    async handle(req: Request, res: Response){

        const { dia, mes, horario, item_id } = req.body

        const createAgendaService = new CreateAgendaService()

        const agenda = await createAgendaService.execute({
            dia,
            mes,
            horario,
            item_id
        })

        return res.json(agenda);

    }
}

export { CreateAgendaController }