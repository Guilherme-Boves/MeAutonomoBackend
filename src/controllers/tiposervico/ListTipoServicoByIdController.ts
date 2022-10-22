import { Request, Response } from "express";
import { ListTipoServicoByIdService } from "../../services/tiposervico/ListTipoServicoByIdService";


class ListTipoServicoByIdController{
    async handle(req: Request, res: Response){

        const tipoServico_id = req.query.tipoServico_id as string;

        const listTipoServicoByIdService = new ListTipoServicoByIdService();

        const servico = await listTipoServicoByIdService.execute({
            tipoServico_id
        })

        res.json(servico)
    }
}

export { ListTipoServicoByIdController }