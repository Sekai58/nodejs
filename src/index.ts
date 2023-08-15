import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from 'body-parser'

import {env} from './config'
import userRoutes from './User'


const app:Express = express()

app.use(bodyParser.json())

app.get("/", (req: Request, res:Response) => {
    res.send("Hello")
})

app.use("/user", userRoutes())

app.all("*", (req: Request, res:Response) => {
    res.send("Path not found")
})

app.listen(env.PORT, () => {
    console.log(`server is running at port http://localhost:${env.PORT}`);
    
})