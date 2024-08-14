import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import transactionRoute from "./routes/transactionRoute.js";
 dotenv.config();
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use('/api', transactionRoute);

app.listen(5000, () => console.log("Server up and running at Port 5000"));
