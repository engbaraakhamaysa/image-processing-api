import fs from "fs/promises";
//Checking Image is Exist
async function checkImage(imagePath: string): Promise<boolean> {
  try {
    await fs.access(imagePath);
    return true;
  } catch {
    return false;
  }
}

export default checkImage;
