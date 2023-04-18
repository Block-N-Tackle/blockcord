import mongoose, { Schema } from "mongoose";

interface IMessage {
  sender: string;
  receiver: string;
  content: string;
  sentAt: Date;
  image?: string | null;
  document?: string | null;
}

interface MessageModel extends mongoose.Model<IMessage>, IMessage {}

interface MessageDoc extends mongoose.Document, IMessage {}

const messageSchema = new Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  content: { type: String, required: true },
  sentAt: { type: Date, required: true },
  image: { type: String, required: false },
  document: { type: String, required: false },
});

const Message = mongoose.model("Message", messageSchema, "Message");

export { Message, MessageDoc, IMessage, MessageModel };
