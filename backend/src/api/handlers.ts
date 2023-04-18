import { Request, Response } from "express";
import mongoose from "mongoose";
import { Message } from "./models/message";
import multer from "multer";

export const uploader = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      var storagePath = req.body.fileStoragePath;
      if (!storagePath)
        callback(new Error("No storage path in request body"), null);
      else callback(null, `uploads/${storagePath}`);
    },
    filename(req, file, callback) {
      var filename = req.body.fileName;
      if (!filename) callback(new Error("No file-name in request body"), null);
      else callback(null, filename);
    },
  } as multer.DiskStorageOptions),
});

export async function getMessagesForSenderReciever(
  req: Request,
  res: Response
) {
  var sender = req.params.senderId;
  var receiver = req.params.receiverId;
  var offset = parseInt(req.params.offset);

  var messages = await Message.find({ sender: sender, receiver: receiver })
    .skip(offset)
    .limit(100)
    .sort({ sentAt: -1 });

  if (!messages) {
    res.status(404).send("No messages found");
    return;
  }

  res.status(200).json({ messages: messages });
}

export async function addMessageForSenderReciever(req: Request, res: Response) {
  var sender = req.params.senderId;
  var receiver = req.params.receiverId;
  new Message({
    sender: sender,
    receiver: receiver,
    sentAt: new Date(Date.now()),
    content: req.body.content,
    image: req.file.path,
  });
}
