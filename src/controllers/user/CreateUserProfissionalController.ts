import { Request, response, Response } from "express";
import { CreateUserProfissionalService } from "../../services/user/CreateUserProfissionalService";

class CreateUserProfissionalController{
    async handle(req: Request, res: Response){
        const { nome, email, password, telefone, dataNascimento, cnpj, descricaoSobreMim } = req.body;

        const createUserProfissionalService = new CreateUserProfissionalService();

        const user = await createUserProfissionalService.execute({
            nome, 
            email, 
            password,
            telefone,
            dataNascimento,
            cnpj,
            descricaoSobreMim
        })
        
        return res.json(user);
    }
}

export { CreateUserProfissionalController }