import { Router } from "express";
import { catchErrors } from "./middleware/error-handler.middleware";
import {
  addMessageForSenderReciever,
  getMessagesForSenderReciever,
  uploader,
} from "./handlers";

const router = Router();

router
  .route("/messages/:senderId/:receiverId/:offset")
  .get((req, res, next) =>
    catchErrors(req, res, next, getMessagesForSenderReciever)
  );

router
  .route("/messages/:senderId/:receiverId")
  .post(uploader.single("file"), (req, res, next) =>
    catchErrors(req, res, next, addMessageForSenderReciever)
  );

export default router;
