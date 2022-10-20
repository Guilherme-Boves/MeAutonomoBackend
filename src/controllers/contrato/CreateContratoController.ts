import { Request, Response } from 'express'
import { CreateContratoService } from '../../services/contrato/CreateContratoService'

class CreateContratoController {
    
    async handle(req: Request, res: Response){

        const cliente_id = req.user_id
        const profissional_id = req.query.profissional_id as string;

        const createContratoService = new CreateContratoService()

        const contrato = await createContratoService.execute({
            cliente_id,
            profissional_id,
        })

        res.json(contrato)
    }
}

export { CreateContratoController }