"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClosestPrimeNumber = void 0;
const statuscode_1 = require("@constants/statuscode");
const createResponse_1 = __importDefault(require("@helpers/createResponse"));
const validateService = __importStar(require("./mainRequest.services"));
exports.getClosestPrimeNumber = (req, res) => {
    const number = req.body.number;
    // return a default message if the value is passed in tbe body
    if (number == 2) {
        createResponse_1.default(`${number} is the lowest prime number`, `${number} is the lowest prime number`)(res, statuscode_1.HTTP.OK);
    }
    else {
        // get the closest prime number less than the vale in the request body
        const result = validateService.getClosestPrimeNumber(number);
        createResponse_1.default(`The closest prime number is ${result}`, result)(res, statuscode_1.HTTP.OK);
    }
};
//# sourceMappingURL=mainRequest.controllers.js.map