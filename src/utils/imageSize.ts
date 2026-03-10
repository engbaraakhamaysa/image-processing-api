import sharp from "sharp";
import checkImage from "./checkImage";
import path from "path";

async function sizeImage(
  name: string,
  width: number,
  height: number,
): Promise<string> {
  // Cached Image
  const imagePath = path.join("thumb", `${name}-${width}x${height}.jpg`);
  const checkCached = await checkImage(imagePath);
  if (checkCached) {
    return imagePath;
  }
  //Resize Image
  await sharp(path.join("images", `${name}.jpg`))
    .resize(width, height)
    .toFile(imagePath);

  return imagePath;
}

export default sizeImage;
