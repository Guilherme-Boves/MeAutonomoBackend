import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

interface Payload { 
    role: string;
}

export function isRoleCliente(req: Request, res: Response, next: NextFunction){

    const authToken = req.headers.authorization

    const [, token] = authToken.split(" ");
    const userRole = 'CLIENTE'
    
    try{
        const { role } = verify(
            token,
            process.env.JWT_SECRET,
        ) as Payload
            
        if (role == userRole){
            return next();
        } else{              
            return res.status(401).json({message:'Not authorized'});
        }

    } catch(err){
        res.status(401).json({message:'Not authorized'});
    }
}