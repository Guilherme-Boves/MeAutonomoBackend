import { Request, Response } from "express";

class DashboardProfissionalController{
    async handle(req: Request, res: Response){
             
        return res.json({ok: true});
    }
}

export { DashboardProfissionalController };