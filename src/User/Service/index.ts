
import * as UserRepository from '../Repository'
import { IUser, ITitle, IBook, IUpdate, IUsers } from '../Repository/User.types'
//business logic

const jwt = require("jsonwebtoken")

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

export const loginUser = async (user:Partial<IUsers>)=>{
    try{
        const data = await UserRepository.loginUser(user)
        console.log("At service",data)
        if(data && user.password===data.password){
            const user = {"userName":data.userName}
            const token = jwt.sign(user,process.env.SECRET_KEY)
            console.log("this is token",token,{"userName":data.userName})
            console.log(JSON.stringify(data))
            return ({token})
        }
        else{
            const error = new Error("User does not exist")
            error.name = '401'
            throw error
        }
    }
    catch(e){
        console.log('service',e)
        throw e
    }
}

export const registerUser = async (user:Partial<IUsers>)=>{
    try{
        return await UserRepository.registerUser(user)
    }
    catch(e){
        console.log(e)
        throw e
    }
}

export const authUser = (user:Partial<IUsers>,decoded:any)=>{
    try{
        return UserRepository.authUser(user,decoded)
    }
    catch(e){
        console.log(e)
    }
}