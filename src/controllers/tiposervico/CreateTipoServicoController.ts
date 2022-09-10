import { Request, Response } from 'express'
import { CreateTipoServicoService } from '../../services/tiposervico/CreateTipoServicoService'

class CreateTipoServicoController {
    
    async handle(req: Request, res: Response){

        const { nome, categoria_id } = req.body

        const createTipoServicoService = new CreateTipoServicoService()

        if(!req.file){
            throw new Error("error uploading file")
        } else {

            const { originalname, filename: imagem } = req.file; 
            
            const tipoServico = await createTipoServicoService.execute({
                nome,
                imagem,
                categoria_id
            })

            return res.json(tipoServico)
        }

    }
}

export { CreateTipoServicoController }