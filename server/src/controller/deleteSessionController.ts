import { Request, Response } from "express";
import Session from "../models/Session";

export async function deleteSessionController(req: Request, res: Response) {
  const sessionId = req.params.sessionId;
  const deleteSession = await Session.findByIdAndDelete(sessionId);
  res.json(deleteSession);
}
