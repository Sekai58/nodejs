import { IBook, ITitle, IUser } from "./User.types"
const { MongoClient } = require("mongodb");

let User: IUser[] = []

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
        const uri = "mongodb+srv://fellow:yvq1V3UUdLwvlaEz@webdevelopment.tuy8pst.mongodb.net/";
        const client = new MongoClient(uri);
        const database = client.db('LibraryManagementSystem')
        const book = database.collection('books')
        const data = await book.findOne(title)
        console.log(JSON.stringify(data))
        return (JSON.stringify(data))
    }
    catch(e){
        return e
    }
}

export const setBook = async(book:IBook)=>{
    try{
        console.log("reached the route",book)
        const uri = "mongodb+srv://fellow:yvq1V3UUdLwvlaEz@webdevelopment.tuy8pst.mongodb.net/";
        const client = new MongoClient(uri);
        const database = client.db('LibraryManagementSystem')
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