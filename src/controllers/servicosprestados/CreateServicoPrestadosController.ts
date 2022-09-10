import { Request, Response } from 'express'
import { CreateServicoPrestadosService } from '../../services/servicosprestados/CreateServicoPrestadosService'

class CreateServicoPrestadosController {
    
    async handle(req: Request, res: Response){

        const {nome, preco, user_id} = req.body

        const createServicoPrestadosService = new CreateServicoPrestadosService()

        const servicoPrestado = await createServicoPrestadosService.execute({
            nome,
            preco,
            user_id
        })

        res.json(servicoPrestado)
    }
}

export { CreateServicoPrestadosController }