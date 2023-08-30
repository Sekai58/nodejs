import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    res.status(Number(err.name)).json(err.message)
}