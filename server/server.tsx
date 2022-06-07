import express from 'express'
import 'dotenv/config'
import rootRouter from './routes/root'
import passport from 'passport'
import User from './models/User'
import cookieSession from 'cookie-session'
import cookieParser from 'cookie-parser'
import process from 'process'
import { Server } from 'socket.io'
import * as http from 'http'
import reportsRouter from './routes/reportsRouter'
import { connect } from './services/db'

const server = express()

const httpServer = http.createServer(server)

export const serverIo = new Server(httpServer, { 'pingTimeout': 200000, 'pingInterval': 25000 })

server.use(express.json())

server.use(
    express.urlencoded({
        extended: false
    })
)

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser(
    (id, done): any => {
        try {
            const user = User.findOne({ _id: id })
            done(null, user)
        } catch (err) {
            done(err)
        }
    }
)

server.use(
    cookieSession({
        name: "session",
        keys: ['cookieKey'],
        maxAge: 24 * 60 * 60 * 100
    })
)

server.use(cookieParser())

server.use(passport.initialize())

server.use(passport.session())

server.use(reportsRouter)

server.use(express.static("dist/static"))

server.use(rootRouter)

export let connection

async function start(): Promise<void> {
    try {
        await connect()

        httpServer.listen(
            process.env.PORT,
            () =>
                console.log(
                    `--- server/start/port: ${process.env.PORT as string}`
                )
        )
        
    } catch (error) {
        console.log('--- server/start/error:', error)
        process.exit(1)
    }
}

void start();
