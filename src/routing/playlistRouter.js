import { Router } from "express";
import authenticate from "../middlewares/authMiddlewares.js";
import PlaylistController from "../controllers/playlistController.js";


const playlistRouter = Router();
const playlistController = new PlaylistController();

playlistRouter.post("/createPlaylist", authenticate, playlistController.createPlaylist);
playlistRouter.delete("/deletePlaylist", authenticate, playlistController.deletePlaylist);
playlistRouter.put("/updatePlaylist", authenticate, playlistController.updatePlaylist)
playlistRouter.get("/getAllPlaylists", authenticate,playlistController.getAllPlaylists);


export default playlistRouter;