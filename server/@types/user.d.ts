import { Types } from "mongoose";

export interface IUser {
    _id?: string,
    id?: string,
    phone?: string,
    code?: string,
    isNewUser?: boolean,
    verified?: boolean,
    status?: string,
    otp?: string,
    name?: string,
    surname?: string,
    profileName?: string,
    inviter?: string,
    email?: string,
    password?: string,
    token?: string,
    avatarId?: string,
    avatarName?: string,
    avatar?: string | Blob | Buffer
}