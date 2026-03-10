import express, { Request, Response } from "express";
import sizeImage from "../utils/imageSize";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    //Get Values in the Query Partametr
    const fileName = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);

    //Resize Image & Send Image
    const image = await sizeImage(fileName, width, height);
    res.status(200).sendFile(image, { root: "." });
  } catch (error) {
    res.status(500).send(`Error Server: ${error}`);
  }
});
export default router;
