"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodySchema = void 0;
const joi_1 = __importDefault(require("joi"));
// use JOI t0 perfom the external validations
const number = joi_1.default.number().required().messages({
    "number.base": `value must be a number`,
    "any.required": `number is required`
});
exports.bodySchema = joi_1.default.object({
    number,
});
//# sourceMappingURL=mainRequest.schemas.js.map