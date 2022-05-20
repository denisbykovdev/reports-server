import MulterGridFsStorage from 'multer-gridfs-storage'
import multer from 'multer'
import express from 'express'
import { IFileInfo } from '../@types/fileInfo'

export const multerStorage: MulterGridFsStorage = new MulterGridFsStorage({
    url: process.env.MONGOATLAS as string,
    cache: true,
    options: { useUnifiedTopology: true },
    file: (req: express.Request, file): Promise<IFileInfo> => {
        console.log(`--- multerStorage/file`, file)
        return new Promise(resolve => {
            const fileInfo = {
                filename: file.originalname,
                bucketName: 'images'
            }
            resolve(fileInfo)
        })
    }
})

export const upload = multer({ storage: multerStorage })
