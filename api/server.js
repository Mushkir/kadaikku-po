import express from "express";
import cors from "cors";
import itemsRouter from "./routes/index.routes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const PORT = 8080;

const corsOptions = {
  credentials: true,
  origin: [
    process.env.CORS_ALLOWED_ORIGIN,
    "https://server-jj4ydbs3b-mushkirs-projects.vercel.app",
    "http://localhost:8081", // For local dev
    "http://192.168.1.7:8081", // Local network access (optional)
  ],
  methods: ["POST", "GET", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  connectDB();
});
