import { ObjectId } from "mongodb";
import { IBook, ITitle, IUpdate, IUser, IUsers } from "./User.types"
const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken")
//connection to database
let User: IUser[] = []

const uri = "mongodb+srv://fellow:yvq1V3UUdLwvlaEz@webdevelopment.tuy8pst.mongodb.net/";
const client = new MongoClient(uri);
const database = client.db('web-fellowship')

export const create = (user: IUser) => {
    try {
        User = [...User, user];
        return "User created successfully"
    } catch (e) {
        return e;
    }
}

export const list = () => {
    try {
        return User;
    } catch (e) {
        return e
    }
}

export const remove = (index: number) => {
    try {
        User.splice(index, 1);
        return "User removed successfully"
    } catch (e) {
        return e
    }
}

export const update = (index: number, value: IUser) => {
    try {
        User = User.map((user, ind) => ind === index ? value : user);
        return "User updated successfully"
    } catch (e) {
        return e
    }
}

export const patch = (index: number, value: Partial<IUser>) => {
    try {
        User = User.map((user, ind) => ind === index ? {...user,...value} : user);
        return "User updated successfully"
    } catch (e) {
        return e
    }
}

export const getBooks= async(title:Partial<ITitle>)=>{
    try{
        const book = database.collection('books')
        const data = await book.findOne(title)
        console.log(JSON.stringify(data))
        return (data)
    }
    catch(e){
        return e
    }
}

export const setBook = async(book:IBook)=>{
    try{
        const books = database.collection('books')
        const data = await books.insertOne(book)
        console.log(JSON.stringify(data))
        console.log( `A document was inserted with the _id: ${data.insertedId}`);
        return (JSON.stringify(data))
    }
    catch(e){
        return e
    }
}

export const deleteBook = async(book:Partial<IBook>)=>{
    try{
        const books = database.collection('books')
        const deletedata = await books.deleteOne(book)
        console.log(book)
        console.log(deletedata.deletedCount)
        return (deletedata.deletedCount)
    }
    catch(e){
        return e
    }
}

export const updateBook = async(book:IUpdate)=>{
    try{
        console.log("reached here")
        const books = database.collection('books')
        const query = book.query
        const update = book.update
        const updateData = books.updateOne(query,update)
        console.log("reached here,update data",query,update)
        return (updateData)
    }
    catch(e){
        return e
    }
}

export const registerUser = async(user:Partial<IUsers>)=>{
    try{
        const users = database.collection('users')
        const roles = database.collection('roles')
        const assignRole = await roles.findOne({"name":"ADMIN"})
        const userRole = {...user,role: assignRole._id}
        const checkEmail = await users.findOne({"email":userRole.email})
        if(checkEmail){
            const error = new Error("User already exists")
            error.name = '409'
            throw error
        }
        else{
            const insertedUser = await users.insertOne(userRole)
            //console.log( `A user was inserted with the _id: ${insertedUser.insertedId}`);
            return (JSON.stringify(insertedUser))
        }
    }
    catch(e){
        throw e
        //return e
    }
}

export const loginUser= async(user:Partial<IUsers>)=>{
    try{
        const users = database.collection('users')
        const data = await users.findOne({"userName":user.userName})
        console.log("At repo",data)
        return data
    }
    catch(e){
        console.log('catch', e);
        throw e
    }
}

export const authUser= async(user:Partial<IUsers>,decoded:any)=>{
    try{
        console.log(decoded)
        return decoded
    }
    catch(e){
        return e
    }
}