"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../../app")); // Link to your server file
const supertest = require("supertest");
const request = supertest(app_1.default);
const invalid_json_1 = __importDefault(require("../../mockJSONData/invalid.json"));
const wrongInput_json_1 = __importDefault(require("../../mockJSONData/wrongInput.json"));
const rightInput_json_1 = __importDefault(require("../../mockJSONData/rightInput.json"));
describe("POST /get-highest-prime-number", () => {
    it("it should return 404 if non-existent route is supplied", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/non-existent-route");
        expect(response.status).toBe(404);
        done();
    }));
    it("it should handle when invalid JSON payloads are passed", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request
            .post("/api/v1/get-highest-prime-number")
            .send(invalid_json_1.default)
            .type("json")
            .expect("Content-Type", /json/);
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Invalid JSON payload passed.");
        expect(response.body.data).toBeNull();
        done();
    }));
    it("it should return 400 if a number is not passed", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request
            .post("/api/v1/get-highest-prime-number")
            .send(wrongInput_json_1.default)
            .type("json")
            .expect("Content-Type", /json/);
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("value must be a number.");
        expect(response.body.data).toBeNull();
        done();
    }));
    it("it should return 200 if the right input is passed", (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request
            .post("/api/v1/get-highest-prime-number")
            .send(rightInput_json_1.default)
            .type("json")
            .expect("Content-Type", /json/);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("The closest prime number is 53");
        expect(response.body.data).toEqual(53);
        done();
    }));
});
//# sourceMappingURL=mainRequest.test.js.map