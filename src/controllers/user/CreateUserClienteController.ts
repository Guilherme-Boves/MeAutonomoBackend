import { Request, response, Response } from "express";
import { CreateUserClienteService } from "../../services/user/CreateUserClienteService";

class CreateUserClienteController{
    async handle(req: Request, res: Response){
        const { name, email, password} = req.body;

        const createUserClienteService = new CreateUserClienteService();

        const user = await createUserClienteService.execute({
            name, 
            email, 
            password
        })
        
        return res.json(user);
    }
}

export { CreateUserClienteController }