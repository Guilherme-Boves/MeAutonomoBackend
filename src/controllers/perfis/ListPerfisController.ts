import { Request, Response } from 'express'
import { ListPerfisService } from '../../services/perfis/ListPerfisService';

class ListPerfisController {

    async handle(req: Request, res: Response ) {

        const user_id = req.user_id;
        const tipoServicoId = req.query.tipoDoServico_id as string;

        const listPerfisService = new ListPerfisService();

        const response = await listPerfisService.execute({
            user_id,
            tipoServicoId
        })

        return res.json(response)
    }
}

export { ListPerfisController }