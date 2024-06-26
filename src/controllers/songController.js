import { getSongById } from "../api/songs.js";
import Like from "../models/likeModel.js";

class SongController {
    getLikedSongs = async (req, res) => {
        const userId = req.user._id
        
        if (!userId) {
            return res.status(400).json({ message: "user and song are required to create a like" });
        }
        
        try {
            const data = [] 
            // obtener canciones del modelo de Like que tengan userId como campo user
            const entries = await Like.find({ user: userId });
            
            // iterar sobre el array de id de canciones obtenidas y por cada una llamar a la api paar obtener sus datos y almacenarlos en un array 
            for (const entry of entries){
                data.push(await getSongById(entry.song))
            }
            res.status(200).json({ data })
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: error.message });
        }
    }
}

export default SongController