import app from "#src/app.js";
import request from "supertest";

describe("API Endpoints", () => {
  describe("GET /health", () => {
    it("should return a 200 status and health information", async () => {
      const response = await request(app).get("/health");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        status: "OK",
        timestamp: expect.any(String),
        uptime: expect.any(Number),
      });
    });
  });

  describe("GET /api", () => {
    it("should return API message", async () => {
      const response = await request(app).get("/api");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "Acquisitions API is running!",
      });
    });
  });

  describe("GET /nonexistent", () => {
    it("should return 404 for non-existent routes", async () => {
      const response = await request(app).get("/nonexistent");
      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        error: "Route not found",
      });
    });
  });
});
