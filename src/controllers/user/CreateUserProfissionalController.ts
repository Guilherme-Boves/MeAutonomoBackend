import { Request, response, Response } from "express";
import { CreateUserProfissionalService } from "../../services/user/CreateUserProfissionalService";

class CreateUserProfissionalController{
    async handle(req: Request, res: Response){
        const { name, email, password} = req.body;

        const createUserProfissionalService = new CreateUserProfissionalService();

        const user = await createUserProfissionalService.execute({
            name, 
            email, 
            password
        })
        
        return res.json(user);
    }
}

export { CreateUserProfissionalController }