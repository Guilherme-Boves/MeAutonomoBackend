import { Response, Request } from 'express';
import { EditCategoriaService } from '../../services/categoria/EditCategoriaService';


class EditCategoriaController {

    async handle(req: Request, res: Response) {
        
        const { categoria_id, nome } = req.body;

        const editCategoriaService = new EditCategoriaService()

        if(!req.file){
            const categoria = await editCategoriaService.execute({
                categoria_id,
                nome,
                imagem: ''
            });

            return res.json(categoria)
            
        } else {            

            const { originalname, filename: imagem } = req.file;     

            const categoria = await editCategoriaService.execute({
                categoria_id,
                nome,
                imagem
            });
    
            return res.json(categoria)
        }
        
    }
}

export { EditCategoriaController }