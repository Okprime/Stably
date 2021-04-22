import express from "express";
import { HTTP } from "@constants/statuscode";
import createResponse from "@helpers/createResponse";
import * as validateService from "./mainRequest.services";

export const getClosestPrimeNumber = (req: express.Request, res: express.Response) => {

  const number: number = req.body.number;

  // return a default message if the value is passed in tbe body
  if (number == 2) {
   createResponse(`${number} is the lowest prime number`, `${number} is the lowest prime number`)(res, HTTP.OK);

  } else {
    // get the closest prime number less than the vale in the request body
    const result: number = validateService.getClosestPrimeNumber(number)
    createResponse(`The closest prime number is ${result}`, result)(res, HTTP.OK);
  }
};
