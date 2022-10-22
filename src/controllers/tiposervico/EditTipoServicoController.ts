import { Response, Request } from 'express';
import { EditTipoServicoService } from '../../services/tiposervico/EditTipoServicoService';


class EditTipoServicoController {

    async handle(req: Request, res: Response) {
        
        const { tipoServico_id, nome } = req.body;

        const editTipoServicoService = new EditTipoServicoService()

        if(!req.file){
            const servico = await editTipoServicoService.execute({
                tipoServico_id,
                nome,
                imagem: ''
            });

            return res.json(servico)
            
        } else {      
            const { originalname, filename: imagem } = req.file;     

            const servico = await editTipoServicoService.execute({
                tipoServico_id,
                nome,
                imagem
            });
    
            return res.json(servico)
        }
        
    }
}

export { EditTipoServicoController }