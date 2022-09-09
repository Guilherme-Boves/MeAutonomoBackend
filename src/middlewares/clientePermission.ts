import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

interface Payload {    
    role: string;
}

export function isRoleCliente(userRole: string) {
   
        const authorizedRole = async (req: Request, res: Response, next: NextFunction) => {

        const authToken = req.headers.authorization

        const [, token] = authToken.split(" ");
   
        try{
            const { role } = verify(
                token,
                process.env.JWT_SECRET,
            ) as Payload
            
            if(role === userRole) {                 
                return next();
            }else{                               
                res.status(401).end();
            }

            // userRole.map(userRole => {
            //     if(userRole == role){                    
            //         console.log('entrou no if' + userRole + ' ' + role)
                    
            //         return next();
            //     }else{
            //         console.log('entrou no else')
            //         res.status(401).json({message:'Not authorized'});
            //     }
            // })
            
        } catch(err){
            res.status(401).json({message:'Not authorized'});
        }
    }
    return authorizedRole;
}