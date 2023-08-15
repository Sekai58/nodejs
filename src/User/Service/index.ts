import * as UserRepository from '../Repository'
import { IUser } from '../Repository/User.types'

export const create = (user:IUser) => {
    try{
        return UserRepository.create(user)
    }catch(e){
        console.log(e);
        
    }
}

export const list = () => {
    try{
        return UserRepository.list()
    }catch(e){
        console.log(e);
        
    }
}

export const update = (index:number, value: IUser) => {
    try{

        return UserRepository.update(index, value)
    }catch(e){
        console.log(e);
        
    }
}

export const remove = (index:number) => {
    try{

        return UserRepository.remove(index)
    }catch(e){
        console.log(e);
        
    }
}

export const patch = (index:number,value:Partial<IUser>) => {
    try{

        return UserRepository.patch(index,value)
    }catch(e){
        console.log(e);
        
    }
}

