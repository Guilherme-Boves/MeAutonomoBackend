import { Request, Response } from "express";
import { UpdateUserInfoProfissionalService } from "../../services/user/UpdateUserInfoProfissionalService";

class UpdateUserInfoProfissionalController {
    async handle(req: Request, res: Response) {

        const user_id = req.user_id;
        const { nome, telefone, endereco, cnpj, descricaoSobreMim } = req.body;

        const updateUserInfoService = new UpdateUserInfoProfissionalService();

        const updateUserInfo = await updateUserInfoService.execute({
            user_id,
            nome,
            telefone,
            endereco,
            cnpj,
            descricaoSobreMim
        })

        res.json(updateUserInfo)
    }
}

export { UpdateUserInfoProfissionalController }