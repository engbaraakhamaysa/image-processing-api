import path from "path";
import fs from "fs/promises";

async function clearCache() {
  try {
    const thumbDir = path.join(__dirname, "../../thumb");
    const files = await fs.readdir(thumbDir);
    for (const file of files) {
      await fs.unlink(path.join(thumbDir, file));
    }
  } catch (err) {
    console.error(err);
  }
}
export default clearCache;
