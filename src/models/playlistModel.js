import mongoose from "mongoose";


const playlistSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: false
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: false
    },

    songs: {
        type: Array,
        required: false,
        unique: false
    }
    

}, { timestamps: true })

const Playlist = mongoose.model("Playlist", playlistSchema);

export default Playlist;