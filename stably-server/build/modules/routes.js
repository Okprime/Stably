"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const baseRoute_routes_1 = __importDefault(require("./baseRoute/baseRoute.routes"));
const mainRequest_routes_1 = __importDefault(require("./mainRequest/mainRequest.routes"));
function routes() {
    const router = express_1.Router();
    // this endpoint returns the highest prime number less than the value inputed
    router.use("/get-highest-prime-number", mainRequest_routes_1.default);
    // this endpoint renders the html file from the React App
    router.use("/*", baseRoute_routes_1.default);
    return router;
}
exports.default = routes;
//# sourceMappingURL=routes.js.map