import Playlist from "../models/playlistModel.js";
import Like from "../models/likeModel.js";
import { getSongById } from "../api/songs.js";

class PlaylistController {

    // Crear una nueva playlist
    async createPlaylist(req, res) {
        const userId = req.user._id;
        const { name, songs } = req.body;

        if (!userId || !name) {
            return res.status(400).json({ message: "User and name are required to create a playlist" });
        }

        try {
            const playlist = new Playlist({ name, user: userId, songs });
            await playlist.save();

            res.status(201).json({ message: "Playlist created successfully", playlist });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

    // Actualizar una playlist
    async updatePlaylist(req, res) {
        const userId = req.user._id;
        const { playlistId, name, songs } = req.body;

        if (!userId || !playlistId) {
            return res.status(400).json({ message: "User and playlistId are required to update a playlist" });
        }

        try {
            const playlist = await Playlist.findOne({ _id: playlistId, user: userId });

            if (!playlist) {
                return res.status(404).json({ message: "Playlist not found" });
            }

            if (name) playlist.name = name;
            if (songs) playlist.songs = songs;

            await playlist.save();

            res.status(200).json({ message: "Playlist updated successfully", playlist });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

    // Eliminar una playlist
    async deletePlaylist(req, res) {
        const userId = req.user._id;
        const { playlistId } = req.body;

        if (!userId || !playlistId) {
            return res.status(400).json({ message: "User and playlistId are required to delete a playlist" });
        }

        try {
            const playlist = await Playlist.findOneAndDelete({ _id: playlistId, user: userId });

            if (!playlist) {
                return res.status(404).json({ message: "Playlist not found" });
            }

            res.status(200).json({ message: "Playlist deleted successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

    // Añadir canciones con like a la playlist "Tus Me Gustas"
    async addLikedSongsToFavorites(userId) {
        try {
            const likedSongs = await Like.find({ user: userId });

            const songIds = likedSongs.map(like => like.song);

            let favoritesPlaylist = await Playlist.findOne({ user: userId, name: "Tus Me Gustas" });

            if (!favoritesPlaylist) {
                favoritesPlaylist = new Playlist({ name: "Tus Me Gustas", user: userId, songs: songIds });
            } else {
                favoritesPlaylist.songs = songIds;
            }

            await favoritesPlaylist.save();
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }
}

export default PlaylistController;
