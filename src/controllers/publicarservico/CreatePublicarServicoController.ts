import { Request, Response } from 'express';
import { CreatePublicarServicoService } from '../../services/publicarservico/CreatePublicarServicoService';

class CreatePublicarServicoController {
    async handle(req: Request, res: Response) {

        const user_id = req.user_id
        
        const createPublicarServicoService = new CreatePublicarServicoService()
        
        const publicarServico = await createPublicarServicoService.execute({             
            user_id
        })

        return res.json(publicarServico)
    }
}

export { CreatePublicarServicoController }
