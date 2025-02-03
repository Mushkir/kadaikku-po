import express from "express";
import bodyParser from "body-parser";
import itemsRouter from "./routes/index.routes.js";
import connectDB from "./config/db.js";

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  connectDB();
});
