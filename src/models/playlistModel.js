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

    

})