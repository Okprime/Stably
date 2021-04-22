import app from "../../../app"; // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

import invalidJson from "../../mockJSONData/invalid.json";
import nonNumber from "../../mockJSONData/wrongInput.json";
import rightInput from "../../mockJSONData/rightInput.json";

describe("POST /get-highest-prime-number", () => {
  it("it should return 404 if non-existent route is supplied", async (done) => {
    const response = await request.get("/non-existent-route");

    expect(response.status).toBe(404);
    done();
  });

  it("it should handle when invalid JSON payloads are passed", async (done) => {
    const response = await request
      .post("/api/v1/get-highest-prime-number")
      .send(invalidJson)
      .type("json")
      .expect("Content-Type", /json/);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid JSON payload passed.");
    expect(response.body.data).toBeNull();
    done();
  });

  it("it should return 400 if a number is not passed", async (done) => {
    const response = await request
      .post("/api/v1/get-highest-prime-number")
      .send(nonNumber)
      .type("json")
      .expect("Content-Type", /json/);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("value must be a number.");
    expect(response.body.data).toBeNull();
    done();
  });

  it("it should return 200 if the right input is passed", async (done) => {
    const response = await request
      .post("/api/v1/get-highest-prime-number")
      .send(rightInput)
      .type("json")
      .expect("Content-Type", /json/);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      "The closest prime number is 53"
    );
    expect(response.body.data).toEqual(53);
    done();
  });
});
