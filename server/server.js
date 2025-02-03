import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import itemsRouter from "./routes/index.routes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 8080;

const corsOptions = {
  credentials: true,
  origin: "*",
  // origin: [
  //   process.env.CORS_ALLOWED_ORIGIN,
  //   "http://localhost:8081", // For local dev
  //   "http://192.168.1.7:8080", // Local network access (optional)
  // ],
};

app.use(cors(corsOptions)); // Apply CORS settings
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  connectDB();
  console.log(process.env.CORS_ALLOWED_ORIGIN);
});
