import { Response, Request } from 'express';
import { DeleteTipoServicoService } from '../../services/tiposervico/DeleteTipoServicoService';


class DeleteTipoServicoController {

    async handle(req: Request, res: Response) {
        
        const tipoServico_id = req.query.tipoServico_id as string;

        const deleteTipoServicoService = new DeleteTipoServicoService()

        const deleteTipoServico = await deleteTipoServicoService.execute({
            tipoServico_id
        });

        return res.json(deleteTipoServico)
    }
}

export { DeleteTipoServicoController }