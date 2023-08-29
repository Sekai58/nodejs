import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from "cors"
import userRoutes from './User'
const { MongoClient } = require("mongodb");
import { IUser } from './User/Repository/User.types'

dotenv.config()
const app:Express = express()

app.use(bodyParser.json())
app.use(cors())

// app.get("/api/connect",(req,res)=>{
//     const uri = "mongodb+srv://fellow:yvq1V3UUdLwvlaEz@webdevelopment.tuy8pst.mongodb.net/";
//     const client = new MongoClient(uri);
//     res.send("successs")
// })

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

// app.delete("/", (req: Request, res:Response) => {
//     res.send(req.body)
// })

app.post("/api/test",(req:Request,res:Response)=>{
    const newUser:IUser = {...req.body}
    console.log(newUser.name)
    res.json("hi there")
})

app.use("/user", userRoutes())

app.all("*", (req: Request, res:Response) => {
    res.send("Path not found")
})

app.listen(process.env.PORT, () => {
    console.log(`server is running at port http://localhost:${process.env.PORT}`);
    
})