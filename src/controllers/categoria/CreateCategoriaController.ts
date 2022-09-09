import { Response, Request } from 'express';

class CreateCategoriaController {

    async handle(req: Request, res: Response) {
        res.json({ok: true})
    }
}

export { CreateCategoriaController }