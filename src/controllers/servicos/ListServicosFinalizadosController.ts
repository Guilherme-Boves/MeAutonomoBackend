import { Request, Response } from 'express';
import { ListServicosFinalizadosService } from '../../services/servicos/ListServicosFinalizadosService';

class ListServicosFinalizadosController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const listSercicosFinalizadosService = new ListServicosFinalizadosService();

        const list = await listSercicosFinalizadosService.execute({
            user_id: user_id
        })

        res.json(list);
    }
}

export { ListServicosFinalizadosController }