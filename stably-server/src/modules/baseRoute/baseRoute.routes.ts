import { Router } from "express";
// import * as MeController from "./baseRoute.controllers";
import path from 'path';

const router = Router();

router.get('/*', (_req, res) => {
	res.sendFile(path.join(__dirname, "../../../stably-client/index.html"))
})

export default router; 