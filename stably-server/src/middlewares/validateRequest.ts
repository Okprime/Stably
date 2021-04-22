import { Response } from "@constants/response";
import createError from "@helpers/createError";
import express from "express";
import { HTTP } from "@constants/statuscode";
import { bodySchema } from "../modules/mainRequest/mainRequest.schemas";

export const validateRequest = () => {

  return (
    req: express.Request,
    _res: express.Response,
    next: express.NextFunction
  ) => {

  const result = bodySchema.validate(req.body);

  if(result.error) {
    return next(
      createError(HTTP.BAD_REQUEST, [
        {
          status: Response.ERROR,
          message: `${result.error.details[0].message.replace(/['"]+/g, '')}.`,
          data: null,
        },
      ])
    );
  }
    next();
};
}
