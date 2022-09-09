import { Response, Request } from 'express';
import { CreateCategoriaService } from '../../services/categoria/CreateCategoriaService';

class CreateCategoriaController {

    async handle(req: Request, res: Response) {
        
        const { nome, imagem } = req.body;

        const createCategoriaService = new CreateCategoriaService()

        const categoria = createCategoriaService.execute({
            nome,
            imagem
        });

        return res.json(categoria)


    }
}

export { CreateCategoriaController }