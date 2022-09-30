import { Request, Response } from "express";
import { UploadingImagesService } from "../../services/user/UploadingImagesService";

class UploadingImagesController {
    async handle(req: Request, res: Response) {

        const user_id = req.user_id;

        const uploadingImagesService = new UploadingImagesService()

        if(!req.file){
            throw new Error("error uploading file")
        } else {            

            const { originalname, filename: imagem } = req.file;

            const upload = await uploadingImagesService.execute({
                user_id,
                imagem
            });
    
            return res.json(upload)
        }
    }
}

export { UploadingImagesController }