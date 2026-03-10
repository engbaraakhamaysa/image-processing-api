import sizeImage from "../utils/imageSize";
import clearCache from "../utils/clearCache";
import checkImage from "../utils/checkImage";
import path from "path";

describe("Image Resizing Function", () => {
  afterAll(async () => {
    await clearCache();
  });

  it("Resize Image Successfully", async () => {
    const result = await sizeImage("cat", 200, 200);
    expect(result).toContain("cat-200x200.jpg");
  });

  it("Cached The Resized Image", async () => {
    const result = await sizeImage("cat", 100, 100);
    const exists = await checkImage(result);
    expect(exists).toBe(true);
  });

  describe("Checking Image Function", () => {
    it("Image is Exist", async () => {
      const check = await checkImage(path.join("images", "cat.jpg"));
      expect(check).toBe(true);
    });

    it("Image is Not  Exist", async () => {
      const check = await checkImage(path.join("thumb", "cat-200x200"));
      expect(check).toBe(false);
    });
  });
});
