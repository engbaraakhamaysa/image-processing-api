import supertest from "supertest";
import app from "../index";
import clearCache from "../utils/clearCache";

const request = supertest(app);

describe("Valid inputs Endpoint", () => {
  afterAll(async () => {
    await clearCache();
  });
  it("Get The API Endpoint", async () => {
    const response = await request.get(
      "/api/image?filename=cat&width=200&height=200",
    );
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("image");
  });
});

describe("Messing Values API EndPoint", () => {
  it("Get The API Endpoint Missing File Name", async () => {
    const response = await request.get(
      "/api/image?filename=&width=200&height=200",
    );
    expect(response.status).toBe(400);
    expect(response.text).toContain("Missing filename");
  });
  it("GET The API Endpoin Missing Width", async () => {
    const response = await request.get("/api/image?filename=cat&height=200");
    expect(response.status).toBe(400);
    expect(response.text).toContain("Missing width or hight");
  });
});

describe("Invalid input API EndPoint", () => {
  it("GET The API Endpont Image not Found", async () => {
    const response = await request.get(
      "/api/image?filename=baraa&width=200&height=200",
    );
    expect(response.status).toBe(404);
    expect(response.text).toContain("Image not found");
  });

  it("GET The API Endpoint Not a Number Width & Height", async () => {
    const response = await request.get(
      "/api/image?filename=cat&width=df&height=sd",
    );
    expect(response.status).toBe(400);
    expect(response.text).toContain("Width & height must be numbers");
  });

  it("GET The API Endpoin  Height negative number", async () => {
    const response = await request.get(
      "/api/image?filename=cat&width=200&height=-200",
    );
    expect(response.status).toBe(400);
    expect(response.text).toContain("Width & height must be greater than 0");
  });
});
