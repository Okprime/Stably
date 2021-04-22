"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import * as MeController from "./baseRoute.controllers";
const path_1 = __importDefault(require("path"));
const router = express_1.Router();
router.get('/*', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../../stably-client/index.html"));
});
exports.default = router;
//# sourceMappingURL=baseRoute.routes.js.map