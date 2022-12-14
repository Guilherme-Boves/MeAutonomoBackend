import { Request, Response } from 'express'
import { CreateAgendaService } from '../../services/agenda/CreateAgendaService'

class CreateAgendaController {

    async handle(req: Request, res: Response){

        const { data, item_id } = req.body

        const createAgendaService = new CreateAgendaService()

        const agenda = await createAgendaService.execute({
            data,
            item_id
        })

        return res.json(agenda);

    }
}

export { CreateAgendaController }