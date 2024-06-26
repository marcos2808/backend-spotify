import { Router } from "express";
import authenticate from "../middlewares/authMiddlewares.js";
import LikeController from "../controllers/likeController.js";


const likeRouter = Router();
const likeController = new LikeController();

likeRouter.post("/create", authenticate, likeController.create);
likeRouter.delete("/delete", authenticate, likeController.delete);

export default likeRouter;