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