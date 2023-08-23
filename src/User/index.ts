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
    return router;
}

export default routes;