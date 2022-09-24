import { Request, Response } from 'express'
import { ListPerfilService } from '../../services/perfil/ListPerfilService';

class ListPerfilController {
    async handle(req: Request, res: Response) {

        const tipoServico_id = req.query.perfis_id as string;
        const perfil_id = req.query.perfil_id as string;
        
        const listPerfilService = new ListPerfilService();

        const response = await listPerfilService.execute({
            tipoServico_id,
            perfil_id,            
        })
        
        res.json(response)
    }
}

export { ListPerfilController }