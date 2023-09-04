import { Request, Response } from "express";
import Session from "../models/Session";

export async function getSessionController(req: Request, res: Response) {
  const { sessionId } = req.params;
  const session = await Session.findById(sessionId);
  res.json(session);
}
