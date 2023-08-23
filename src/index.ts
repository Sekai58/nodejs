import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from "cors"
import userRoutes from './User'
const { MongoClient } = require("mongodb");

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

app.get("/", (req: Request, res:Response) => {
    res.send("Hello! Welcome to home page")
})

app.use("/user", userRoutes())

app.all("*", (req: Request, res:Response) => {
    res.send("Path not found")
})

app.listen(process.env.PORT, () => {
    console.log(`server is running at port http://localhost:${process.env.PORT}`);
    
})