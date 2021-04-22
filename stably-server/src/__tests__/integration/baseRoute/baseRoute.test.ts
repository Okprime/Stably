import app from "../../../app";
const supertest = require("supertest");
const request = supertest(app);

describe("GET /", () => {
  it("it should return 404 if non-existent route is supplied", async (done) => {
    const response = await request.get("/");

    expect(response.status).toBe(404);
    done();
  });
});
