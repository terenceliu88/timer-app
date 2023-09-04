import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getSessionsController } from "./controller/getSessionsController";
import { createSessionController } from "./controller/createSessionController";
import { deleteSessionController } from "./controller/deleteSessionController";
import { getSessionController } from "./controller/getSessionController";
import { createTimeForSessionController } from "./controller/createTimeForSessionController";
import { deleteTimeOnSessionController } from "./controller/deleteTimeonSessionController";

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/sessions", getSessionsController);
app.post("/sessions", createSessionController);
app.delete("/sessions/:sessionId", deleteSessionController);

app.get("/sessions/:sessionId", getSessionController);
app.post("/sessions/:sessionId/times", createTimeForSessionController);
app.delete("/sessions/:sessionId/times/:index", deleteTimeOnSessionController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
