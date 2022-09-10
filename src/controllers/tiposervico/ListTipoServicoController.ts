import { Request, Response } from 'express'
import { ListByCategoriaService } from '../../services/tiposervico/ListByCategoriaService'

class ListTipoServicoController {
    async handle(req: Request, res: Response) {

        const categoria_id = req.query.categoria_id as string;
        
        const listByCategoriaService = new ListByCategoriaService();

        const tipoServicos = await listByCategoriaService.execute({
            categoria_id
        });

        return res.json(tipoServicos)

    }
}

export { ListTipoServicoController }