import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

interface Payload { 
    sub: string;   
    role: string;
}

export function isRoleAdmin(userRole: string[]) {
   
        const authorizedRole = async (req: Request, res: Response, next: NextFunction) => {

        const authToken = req.headers.authorization

        const [, token] = authToken.split(" ");
        
        try{
            const { sub, role } = verify(
                token,
                process.env.JWT_SECRET,
            ) as Payload
            
            // if(role === userRole) {                 
            //     return next();
            // }else{                               
            //     res.status(401).end();
            // }

            console.log(userRole[0])
            console.log(userRole[1])
            console.log(role)

            if (userRole[0] == role && userRole[1] == 'admin'){
                return next();
            } else if(userRole[0] == 'admin' && userRole[1] == role){
                return next();
            } else{              
                return res.status(401).json({message:'Not authorized'});
            }
            
        } catch(err){
            res.status(401).json({message:'Not authorized'});
        }
    }
    return authorizedRole;
}