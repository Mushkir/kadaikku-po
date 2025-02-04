import express from "express";
import cors from "cors";
import itemsRouter from "./routes/index.routes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 8080;

const corsOptions = {
  credentials: true,
  origin: [
    process.env.CORS_ALLOWED_ORIGIN,
    "http://localhost:8081", // For local dev
    "http://192.168.1.7:8080", // Local network access (optional)
  ],
  methods: ["POST", "GET", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  connectDB();
  console.log(process.env.CORS_ALLOWED_ORIGIN);
});
