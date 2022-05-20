export interface IMulterAvatar {
    fieldname: string
    originalname: string
    encoding: string
    mimetype: string
    id: string
    filename: string
    metadata: null | { [key: string]: string }
    bucketName: string
    chunkSize: number
    size: number
    md5: string
    uploadDate: string | number
    contentType: string
}
