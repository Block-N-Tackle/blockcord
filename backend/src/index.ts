import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express, { Request, Response } from "express";
import helmet from "helmet";
import routes from "./api/routes";
import logger from "./api/middleware/logger.middleware";
// import cron from "node-cron";

import { connectToDb } from "./api/mongoose_connector/mongoose_connector";
import { handleError } from "./api/middleware/error-handler.middleware";

const app = express();
const port = 3030;

// Connect to MongoDB (using mongoose)
connectToDb()
  .then(() => {
    console.log("connectToDb promise completed.");
  })
  .catch((e) => {
    console.log(`Error: ${e}`);
  });

app.use(compression());

app.use(helmet());

// enable all CORS request
app.use(cors());

// add logger middleware
app.use(logger);

// parse incoming request body and append data to `req.body`
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(400).json({
    message: "No API Request handler for path: /",
    error: "ERR_INVALID_BASE_URL_API_REQUEST",
  });
});

// app.post(
//   "/upload-file",
//   uploader.single("file"),
//   (req: Request, res: Response) => {
//     res
//       .status(200)
//       .json({ message: "File uploaded successfully!", error: null });
//   }
// );

app.use("/api/", routes);

app.use(handleError);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
