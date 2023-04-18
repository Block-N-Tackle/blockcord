import { Request, Response, NextFunction } from "express";

/**
 * Custom error handler to standardize error objects returned to
 * the client
 *
 * @param err Error caught by Express.js
 * @param req Request object provided by Express
 * @param res Response object provided by Express
 * @param next NextFunction function provided by Express
 */
function handleError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  //   let customError = err;

  // we are not using the next function to prvent from triggering
  // the default error-handler. However, make sure you are sending a
  // response to client to prevent memory leaks in case you decide to
  // NOT use, like in this example, the NextFunction .i.e., next(new Error())
  res.status(500).json({
    message:
      "An unknown error occurred during handling the request. Please check if the request has correct parameters and the parameters have the correct type.",
    error: "ERR_SERVER_TYPE_OR_UNKNOWN_ERROR_OCCURRED",
  });
}

type AsyncHandlerFunction = (req: Request, res: Response) => Promise<unknown>;

async function catchErrors(
  req: Request,
  res: Response,
  next: NextFunction,
  handler: AsyncHandlerFunction
) {
  try {
    handler(req, res)
      .then((val) => {
        // console.log(val);
        next();
      })
      .catch((e) => {
        next(e);
        return null;
      });
  } catch (e) {
    // console.log("Catch");
    next(e);
  }
}

export { handleError, catchErrors, AsyncHandlerFunction };
