import { Request, Response } from 'express'
import { CreateContratoService } from '../../services/contrato/CreateContratoService'

class CreateContratoController {
    
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const createContratoService = new CreateContratoService()

        const contrato = await createContratoService.execute({
            user_id
        })

        return res.json(contrato)
    }
}

export { CreateContratoController }