import { Request, Response } from "express";
import { DeleteServicoPrestadoService } from "../../services/servicosprestados/DeleteServicoPrestadoService";

class DeleteServicoPrestadoController {
    async handle(req: Request, res: Response){

        const servico_id = req.query.servico_id as string

        const deleteServicoPrestadoService = new DeleteServicoPrestadoService();

        const servico = await deleteServicoPrestadoService.execute({
            servico_id
        })

        return res.json(servico)

    }
}

export { DeleteServicoPrestadoController }