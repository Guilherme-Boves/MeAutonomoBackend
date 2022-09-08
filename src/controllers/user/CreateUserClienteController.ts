import { Request, response, Response } from "express";
import { CreateUserClienteService } from "../../services/user/CreateUserClienteService";

class CreateUserClienteController{
    async handle(req: Request, res: Response){
        const { nome, email, password, telefone, dataNascimento, cpf } = req.body;

        const createUserClienteService = new CreateUserClienteService();

        const user = await createUserClienteService.execute({
            nome, 
            email, 
            password,
            telefone,
            dataNascimento,
            cpf
        })
        
        return res.json(user);
    }
}

export { CreateUserClienteController }