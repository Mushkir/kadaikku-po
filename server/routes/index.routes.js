import express from "express";
import { Create, Read, Success } from "../controllers/item.controller.js";

const itemsRouter = express.Router();

itemsRouter.post("/", Create);

itemsRouter.get("/get-all-lists", Read);

itemsRouter.put("/task-success/:id", Success);

export default itemsRouter;
