import { Router } from "express";
const jwt = require("jsonwebtoken")

import * as UserController from './Controller'
import {verifyJwt} from "./Middleware";

const router = Router();

const routes = () => {
    router.post("/create", UserController.createUser);
    router.get("/", UserController.listUser);
    router.put("/update/:id", UserController.update)
    router.delete("/delete/:id", UserController.remove)
    router.patch("/patch/:id",UserController.patch)
    router.get("/api/connect",UserController.getBooks)
    router.post("/api/add",UserController.setBook)
    router.delete("/api/delete",UserController.deleteBook)
    router.put("/api/update",UserController.updateBook)
    router.post("/api/user/register",UserController.registerUser)
    router.post("/api/user/login",UserController.loginUser)
    router.post("/api/user/auth",verifyJwt,UserController.authUser)
    return router;
}

export default routes;