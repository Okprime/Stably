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

  // ensure on the server that the input must not be less than the lowest prime number (which is 2)
  if ((req.body.number < 2) || (req.body.number < '2')) {
    return next(
      createError(HTTP.BAD_REQUEST, [
        {
          status: Response.ERROR,
          message: 'Value input must be greater or equals to 2',
          data: null,
        },
      ])
    );
  }

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
