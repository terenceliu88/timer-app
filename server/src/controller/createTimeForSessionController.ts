import { Request, Response } from "express";
import Session from "../models/Session";

export async function createTimeForSessionController(
  req: Request,
  res: Response
) {
  const sessionId = req.params.sessionId;
  const session = await Session.findById(sessionId);
  if (!session) return res.status(400).send("no session of this id exists");
  const { text } = req.body;
  session.times.push(text);
  await session?.save();
  res.json(session);
}
