import { Response, Request } from 'express';
import { DeleteCategoriaService } from '../../services/categoria/DeleteCategoriaService';

class DeleteCategoriaController {

    async handle(req: Request, res: Response) {
        
        const categoria_id = req.query.categoria_id as string;

        const deleteCategoriaService = new DeleteCategoriaService()

        const deleteCategoria = await deleteCategoriaService.execute({
            categoria_id
        });

        return res.json(deleteCategoria)
    }
}

export { DeleteCategoriaController }