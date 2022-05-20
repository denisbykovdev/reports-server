import { IUser } from "./user"

export interface IDecodedToken {
    user: IUser
    iat: number
    exp: number
}
