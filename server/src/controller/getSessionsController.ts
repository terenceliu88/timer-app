import { Request, Response } from "express";
import Session from "../models/Session";

export async function getSessionsController(req: Request, res: Response) {
  const sessions = await Session.find();
  res.json(sessions);
}
