import * as UserRepository from '../Repository'
import { IUser, ITitle, IBook, IUpdate, IUsers } from '../Repository/User.types'

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

export const getBooks =(title:Partial<ITitle>)=>{
    try{
        return UserRepository.getBooks(title)
    }
    catch(e){
        console.log(e)
    }
}

export const setBook = (book:IBook)=>{
    try{
        return UserRepository.setBook(book)
    }
    catch(e){
        console.log(e)
    }
}

export const deleteBook =(book:Partial<IBook>)=>{
    try{
        return UserRepository.deleteBook(book)
    }
    catch(e){
        console.log(e)
    }
}

export const updateBook=(book:IUpdate)=>{
    try{
        return UserRepository.updateBook(book)
    }
    catch(e){
        console.log(e)
    }
}

export const loginUser = (user:Partial<IUsers>)=>{
    try{
        return UserRepository.loginUser(user)
    }
    catch(e){
        console.log(e)
    }
}

export const registerUser = (user:Partial<IUsers>)=>{
    try{
        return UserRepository.registerUser(user)
    }
    catch(e){
        console.log(e)
    }
}