import { Router } from "express";
import authenticate from "../middlewares/authMiddlewares.js";
import SongController from "../controllers/songController.js";


const songRouter = Router();
const songController = new SongController();

songRouter.get("/liked", authenticate, songController.getLikedSongs);

export default songRouter;