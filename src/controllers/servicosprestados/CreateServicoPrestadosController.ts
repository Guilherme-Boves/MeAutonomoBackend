import { Request, Response } from 'express'
import { CreateServicoPrestadosService } from '../../services/servicosprestados/CreateServicoPrestadosService'

class CreateServicoPrestadosController {
    
    async handle(req: Request, res: Response){

        const {nome, preco, item_id} = req.body

        const createServicoPrestadosService = new CreateServicoPrestadosService()

        const servicoPrestado = await createServicoPrestadosService.execute({
            nome,
            preco,
            item_id
        })

        res.json(servicoPrestado)
    }
}

export { CreateServicoPrestadosController }