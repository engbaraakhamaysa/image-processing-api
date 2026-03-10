import check from "./middleware/check";
import imageRoutes from "./routes/imageRoutes";
import express, { Request, Response } from "express";

const port = 8000;
const app = express();

//Main Endpoent
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello to My Project Image Processing  API");
});

//Image Router
app.use("/api/image", check, imageRoutes);

//app Listen to Port 8000
app.listen(port, () => {
  console.log(`Server running port ${port}`);
});
export default app;
