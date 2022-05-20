import { Schema, model, Document, Types } from 'mongoose'
import { IUser } from '../@types/user'

export const userSchema = new Schema({
    // _id: Types.ObjectId,
    phone: {
        type: String,
        required: true,
        unique: true
    },
    isNewUser: {
        type: Boolean,
        require: false
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    profileName: {
        type: String
    },
    inviter: {
        type: String
    },
    verified: {
        type: Boolean,
    },
    status: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: false,
        unique: true
    },
    avatarId: {
        type: Types.ObjectId || String,
        required: false
    },
    avatarName: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    }
})

// export interface UserDocument extends Document {
//     fullName: string;
//     createdAt: Date;
//     updatedAt: Date;
// };

export default model<IUser & Document>('User', userSchema);
