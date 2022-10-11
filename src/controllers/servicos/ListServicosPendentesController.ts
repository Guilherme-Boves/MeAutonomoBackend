import { Request, Response } from 'express';
import { ListServicosPendentesService } from '../../services/servicos/ListServicosPendentesService';

class ListServicosPendentesController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const listSercicosPendetesService = new ListServicosPendentesService();

        const list = await listSercicosPendetesService.execute({
            user_id: user_id
        })

        res.json(list);
    }
}

export { ListServicosPendentesController }