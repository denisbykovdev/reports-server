import { Types } from 'mongoose'

export interface IMongoAvatar {
    _id: string | Types.ObjectId
    length: number
    chunkSize: number
    uploadDate: string | number
    filename: string
    md5: string
    contentType: string
}
