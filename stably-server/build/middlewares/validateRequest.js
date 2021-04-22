"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const response_1 = require("@constants/response");
const createError_1 = __importDefault(require("@helpers/createError"));
const statuscode_1 = require("@constants/statuscode");
const mainRequest_schemas_1 = require("../modules/mainRequest/mainRequest.schemas");
exports.validateRequest = () => {
    return (req, _res, next) => {
        const result = mainRequest_schemas_1.bodySchema.validate(req.body);
        console.log('resuly', result);
        if ((req.body.number < 2) || (req.body.number < '2')) {
            return next(createError_1.default(statuscode_1.HTTP.BAD_REQUEST, [
                {
                    status: response_1.Response.ERROR,
                    message: 'Value input must be greater or equals to 2',
                    data: null,
                },
            ]));
        }
        if (result.error) {
            return next(createError_1.default(statuscode_1.HTTP.BAD_REQUEST, [
                {
                    status: response_1.Response.ERROR,
                    message: `${result.error.details[0].message.replace(/['"]+/g, '')}.`,
                    data: null,
                },
            ]));
        }
        next();
    };
};
//# sourceMappingURL=validateRequest.js.map