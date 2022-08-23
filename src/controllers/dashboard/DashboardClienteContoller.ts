import { Request, Response } from "express";

class DashboardClienteController{
    async handle(req: Request, res: Response){
             
        return res.json({ok: true});
    }
}

export { DashboardClienteController };