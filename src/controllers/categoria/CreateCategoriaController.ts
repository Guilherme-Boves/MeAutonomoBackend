import { Response, Request } from 'express';
import { CreateCategoriaService } from '../../services/categoria/CreateCategoriaService';

class CreateCategoriaController {

    async handle(req: Request, res: Response) {
        
        const { nome } = req.body;

        const createCategoriaService = new CreateCategoriaService()

        if(!req.file){
            throw new Error("error uploading file")
        } else {            

            const { originalname, filename: imagem } = req.file;     

            const categoria = await createCategoriaService.execute({
                nome,
                imagem
            });
    
            return res.json(categoria)
        }

        


    }
}

export { CreateCategoriaController }