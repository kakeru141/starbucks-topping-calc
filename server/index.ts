import express, { Request, Response } from "express";
import mongoose from "mongoose";
import next from "next";
import { router } from "./api/router";
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()

const dev = process.env.NODE_ENV === 'development'
const port = process.env.PORT
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    server.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, PUT, PATCH, DELETE, OPTION"
        )
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
        next()
    })
    server.use(bodyParser.json())
    server.use(express.json())
    server.use('/api', router)
    mongoose.connect(process.env.DB_URL || '')
    .catch((err) => console.error(err))


    server.all('*', (req: Request, res: Response) => {
        return handle(req, res)
    })

    server.listen(port, () => {
        console.log(`server running is ${port}`)
    })
})
.catch((err) => console.error(err))