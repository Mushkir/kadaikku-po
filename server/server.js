import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import itemsRouter from "./routes/index.routes.js";
import connectDB from "./config/db.js";

const app = express();
const PORT = 8080;

// const corsOptions = {
//   credentials: true,
//   origin: "http://localhost:5173",
// };

// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", itemsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
  connectDB();
});
