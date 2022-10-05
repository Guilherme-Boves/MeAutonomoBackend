import { Request, Response } from "express";
import { UpdateUserInfoClienteService } from "../../services/user/UpdateUserInfoClienteService";

class UpdateUserInfoClienteController {
    async handle(req: Request, res: Response) {

        const user_id = req.user_id;
        const { nome, telefone, endereco } = req.body;

        const updateUserInfoService = new UpdateUserInfoClienteService();

        const updateUserInfo = await updateUserInfoService.execute({
            user_id,
            nome,
            telefone,
            endereco
        })

        res.json(updateUserInfo)
    }
}

export { UpdateUserInfoClienteController }