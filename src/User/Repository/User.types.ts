import {ObjectId } from 'mongodb';

export enum IGender{
    'MALE',
    'FEMALE'
}

export interface IUser{
    name: string;
    age: number;
    gender: IGender;
}

export interface ITitle{
    title:string,
}

export interface IGenre{
    title:string,
    description:string
}

export interface IBook{
    title:string,
    author:string,
    isbn:string,
    description?:string,
    author_id:string
    genre?:IGenre
}

export interface IIssueBook{
    id:number,
    name:string,
    email:string,
    gender:string,
    book:string,
    dateField:Date
}

export interface IUpdate{
    query:Partial<IBook>
    update:Partial<IBook>
}

export interface IUsers{
    firstName:string,
    lastName:string,
    userName:string,
    email:string,
    password:string,
    role:ObjectId
}

// export interface IError extends Error{
//     error:Error,
//     status:number
// }

