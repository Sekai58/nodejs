enum IGender{
    'MALE',
    'FEMALE'
}

export interface IUser{
    name: string;
    age: number;
    gender: IGender;
}