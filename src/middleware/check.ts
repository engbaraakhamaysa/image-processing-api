import { Request, Response, NextFunction } from "express";
import checkImage from "../utils/checkImage";
import path from "path";

//This Middleware: Cached Values is A Missing , not number , number less than 0 & Image not found

async function check(req: Request, res: Response, next: NextFunction) {
  const fileName = req.query.filename as string;
  const widthString = req.query.width as string;
  const heightString = req.query.height as string;

  // Check Missing Values & Not Found Image

  if (!fileName) return res.status(400).send("Missing filename");

  const imagePath = path.join("images", `${fileName}.jpg`);
  const check = await checkImage(imagePath);
  if (!check) return res.status(404).send("Image not found");

  if (!widthString || !heightString)
    return res.status(400).send("Missing width or hight");

  //Check is number & greater than zeor

  const numberWidth = parseInt(widthString);
  const numberHeight = parseInt(heightString);

  if (!numberWidth || !numberHeight)
    return res.status(400).send("Width & height must be numbers");

  if (numberWidth <= 0 || numberHeight <= 0)
    return res.status(400).send("Width & height must be greater than 0");

  next();
}
export default check;
