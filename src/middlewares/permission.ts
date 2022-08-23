import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

interface Payload {
    role: string
}

export function isRole(userRole: string[]) {
   
        const authorizedRole = async (req: Request, res: Response, next: NextFunction) => {

        const authToken = req.headers.authorization

        const [, token] = authToken.split(" ");
   
        try{
            const { role } = verify(
                token,
                process.env.JWT_SECRET,
            ) as Payload

            // if(role === userRole) {                
            //     return next();
            // }else{
            //     res.status(401).end();
            // }

            userRole.map(userRole => {
                if(userRole === role || userRole === 'admin'){
                    return next();
                }else{
                    res.status(401).json({message:'Not authorized'});
                }
            })
            
        } catch(err){
            res.status(401).json({message:'Not authorized'});
        }
    }
    return authorizedRole;
}