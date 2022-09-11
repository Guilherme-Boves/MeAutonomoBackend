import { Request, Response } from 'express'
import { CreateContratoService } from '../../services/contrato/CreateContratoService'

class CreateContratoController {
    
    async handle(req: Request, res: Response){

        const { user_id, publicarServico_id } = req.body

        const createContratoService = new CreateContratoService()

        const contrato = await createContratoService.execute({
            user_id,
            publicarServico_id
        })

        return res.json(contrato)
    }
}

export { CreateContratoController }