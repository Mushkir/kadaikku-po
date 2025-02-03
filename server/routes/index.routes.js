import express from "express";
import {
  Create,
  Delete,
  DeleteAll,
  Read,
  Success,
} from "../controllers/item.controller.js";

const itemsRouter = express.Router();

itemsRouter.post("/", Create);

itemsRouter.get("/get-all-lists", Read);

itemsRouter.put("/task-success/:id", Success);

itemsRouter.delete("/delete-list-item/:id", Delete);

itemsRouter.delete("/delete-all", DeleteAll);

export default itemsRouter;
