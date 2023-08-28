import { Router } from "express";

import * as UserController from './Controller'

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
    return router;
}

export default routes;