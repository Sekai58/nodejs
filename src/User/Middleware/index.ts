import { Request, Response, NextFunction } from 'express';
//import dotenv from 'dotenv'
import jwt from "jsonwebtoken"

//dotenv.config()
export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?authHeader:null
    console.log(process.env.SECRET_KEY,token,authHeader)
  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token missing.' });
  }
  jwt.verify(token,process.env.SECRET_KEY as string,(err: any, decoded:any)=>{
    console.log(decoded)
    if (err) return res.status(403).json("Unauthorized")
    req.user = decoded;
    next()
  })
};
