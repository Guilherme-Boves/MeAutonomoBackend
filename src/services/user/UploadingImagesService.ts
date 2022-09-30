import prismaClient from "../../prisma";

interface UploadRequest {
    user_id: string;
    imagem: string;
}

class UploadingImagesService {

    async execute({user_id, imagem}: UploadRequest){

        const upload = await prismaClient.user.update({
            where:{
                id: user_id
            },
            data:{
                imagem: imagem,
            }
        })

        return upload
    }
}

export { UploadingImagesService }