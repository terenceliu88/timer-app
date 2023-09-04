import { Request, Response } from "express";
import Session from "../models/Session";

export async function createSessionController(req: Request, res: Response) {
  const newSession = new Session({
    title: req.body.title,
  });

  const createdSession = await newSession.save();
  res.json(createdSession);
}
