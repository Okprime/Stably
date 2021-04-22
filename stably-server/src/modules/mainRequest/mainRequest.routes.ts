import { validateRequest } from "../../middlewares/validateRequest";
import { Router } from "express";
import * as ValidateController from "./mainRequest.controllers";

const router = Router();

router.post(
  "*",
  validateRequest(),
  ValidateController.getClosestPrimeNumber
);

export default router;