import express, { Express, NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from "cors"
import userRoutes from './User'
const { MongoClient } = require("mongodb");
import { IUser } from './User/Repository/User.types'
import { errorHandler } from './User/Middleware/error'

dotenv.config()
const app:Express = express()

app.use(bodyParser.json())
app.use(cors())

app.post("/api/login",(req:Request,res:Response)=>{
    const { username, password } = req.body;
    if(username==="Gritfeat" && password==="Fellowship"){
        res.status(201).json("Successful")
    }
    else{
        res.status(401).json("Unauthorized")
    }
    console.log(req.body)
})

app.post("/api/bookissue",(req:Request,res:Response)=>{
    const {id,name,email,gender,book,dateField} = req.body;
    if(id==="1234567890"){
        res.status(201).json("Book has been issued")
    }
    else{
        res.status(401).json("Student record not found")
    }
    console.log(req.body)
})

app.post("/api/test",(req:Request,res:Response)=>{
    const newUser:IUser = {...req.body}
    console.log(newUser.name)
    res.json("hi there")
})

app.use("/user", userRoutes())

// app.use("*",(err:Error,req:Request,res:Response,next:NextFunction)=>{
//     console.log("reached the middleware for error handling",err.message)
//     //res.sendStatus(500).json("testing error middleware")
//     next()
// })

app.all("*", (req: Request, res:Response) => {
    res.send("Path not found")
})

app.use("*",errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`server is running at port http://localhost:${process.env.PORT}`);

})