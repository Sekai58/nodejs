import { Request, Response } from 'express';
import * as UserService from '../Service';

export const createUser = (req:Request, res:Response) => {
    try{
        res.status(201).json(UserService.create(req.body))
    }catch(e){
        res.status(500).json(e)
    }
}

export const listUser = (req:Request, res:Response) => {
    try{
        res.status(201).json(UserService.list())
    }catch(e){
        res.status(500).json(e)
    }
}

export const update = (req: Request, res:Response) => {
    try{

       res.status(201).json(UserService.update(Number(req.params.id), req.body))
    }catch(e){
        console.log(e);
        
    }
}

export const remove = (req: Request, res:Response) => {
    try{

       res.status(201).json(UserService.remove(Number(req.params.id)))
    }catch(e){
        console.log(e);
    }
}

export const patch = (req:Request, res:Response) => {
    try{
        res.status(201).json(UserService.patch(Number(req.params.id),req.body))
    }catch(e){
        res.status(500).json(e)
    }
}