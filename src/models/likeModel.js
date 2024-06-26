import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: false
    },
    song: {
        type: String,
        required: true,
        unique: false
    }
}, { timestamps: true });

const Like = mongoose.model("Like", likeSchema);

export default Like;