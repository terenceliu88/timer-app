import { Request, Response } from "express";
import Session from "../models/Session";

export async function deleteTimeOnSessionController(
  req: Request,
  res: Response
) {
  const sessionId = req.params.sessionId;
  const index = req.params.index;
  const session = await Session.findById(sessionId);

  if (!session) return res.status(400).send("no session of this id exists");

  session.times.splice(parseInt(index), 1);
  await session.save();
  res.json(session);
}
