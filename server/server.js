/** @format */

import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cors from "cors";
config();
const app = express();

//middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use("/api", appRouter);

export default app;
