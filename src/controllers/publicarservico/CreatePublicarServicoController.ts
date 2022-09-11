import { Request, Response } from 'express';
import { CreatePublicarServicoService } from '../../services/publicarservico/CreatePublicarServicoService';

class CreatePublicarServicoController {
    async handle(req: Request, res: Response) {

        const { 
            tipoDoServico_id, 
            descricaoServico, 
            servicoPrestadosProf_id, 
            agenda_id, 
            user_id 
        } = req.body

        const createPublicarServicoService = new CreatePublicarServicoService()
        
        const publicarServico = await createPublicarServicoService.execute({
            tipoDoServico_id, 
            descricaoServico, 
            servicoPrestadosProf_id, 
            agenda_id, 
            user_id
        })

        return res.json(publicarServico)
    }
}

export { CreatePublicarServicoController }
