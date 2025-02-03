import express from "express";
import { Create, Read } from "../controllers/item.controller.js";

const itemsRouter = express.Router();

itemsRouter.post("/", Create);

itemsRouter.get("/get-all-lists", Read);

export default itemsRouter;
