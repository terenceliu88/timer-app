import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const SessionSchema = new Schema({
  title: String,
  times: [String],
});

const SessionModel = mongoose.model("Session", SessionSchema);

export default SessionModel;
