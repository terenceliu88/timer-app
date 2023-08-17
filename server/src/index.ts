import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import Deck from './models/Deck';

const PORT = 5000;

const app = express();

app.use(express.json());

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title
  })

  const createdDeck = await newDeck.save();
  res.json(createdDeck)
});

// PROMISE 
mongoose
  .connect(
    'mongodb+srv://leafguy:88KndfknJcHPH32G@cluster0.vimbdjc.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    // Listen for connections after fully done connecting to the database
    console.log(`listening on port ${PORT}`)
    app.listen(PORT);
  })