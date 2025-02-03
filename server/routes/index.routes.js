import express from "express";
import { Create } from "../controllers/item.controller.js";

const itemsRouter = express.Router();

itemsRouter.get("/", Create);

export default itemsRouter;
