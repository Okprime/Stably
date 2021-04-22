import { Router } from "express";

import baseRoute from "./baseRoute/baseRoute.routes";
import mainRoutes from "./mainRequest/mainRequest.routes";

export default function routes() {
  const router = Router();

  // this endpoint returns the highest prime number less than the value inputed
  router.use("/get-highest-prime-number", mainRoutes);

  // this endpoint renders the html file from the React App
  router.use("/*", baseRoute);

  return router;
}
