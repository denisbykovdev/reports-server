import jwt from 'jsonwebtoken'
import express from 'express'
import { IDecodedToken } from '../@types/decodedToken'
import { IUser } from '../@types/user'

export default function verifyToken(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): express.Response | express.NextFunction | undefined | any{
    if(!req.user && !req.headers['authorization']) {
        return res.redirect('/')
    }

    // console.log(
    //     `--- verifyToken/req.headers:`, req.headers
    // )

    // console.log(
    //     `--- verifyToken/req.user:`, req.user
    // )

    const reqUser = req.user as IUser

    if(reqUser && reqUser.token){

        next()
    }

    const authHeader = req.headers['authorization']

    // console.log(`--- verifyToken/req.headers['authorization']:`, authHeader)

    const token = authHeader && authHeader.split(' ')[1]

    // console.log(`--- verifyToken/header-token:`, token)

    if (token == null || !token) {
        // console.log(`--- veyfitocken/authHeader/token:false:`, authHeader)
        // return res.status(401).json({
        //     message: `no token :angry:`
        // })
        // res.redirect('/signup')
    }

    jwt.verify(
        token as string, 
        process.env.TOKEN_SECRET as string, 
        (err, decoded) => {
            if (err) {
                // console.log(`--- verifyToken/verify/error:`, err)
                // return res.status(403).json({ message: `token is not verified 👎` })
                return res.redirect('/signin')
            }

            // console.log(
            //     `--- verifyToken/decoded:`,
            //     decoded,
            //     (decoded as IDecodedToken).user
            // )

            if ((decoded as IDecodedToken).user) {
                const decodedUser: IUser = (decoded as IDecodedToken).user

                req.user = decodedUser
            }

            // console.log(
            //     `--- verifyToken/next req.user:`, 
            //     req.user
            // )

            next()
        })
}
