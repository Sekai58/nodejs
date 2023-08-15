import { IUser } from "./User.types"
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
