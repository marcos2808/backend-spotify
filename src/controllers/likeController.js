import Like from "../models/likeModel.js";

class LikeController {

    async create(req, res) {
        const userId = req.user._id;
        const { song } = req.body;

        console.log(userId)
        console.log(song)

        if (!userId|| !song) {
            return res.status(400).json({ message: "user and song are required to create a like" });
        }

        try {
            const existingLike = await Like.findOne({ user: userId, song });
            if (existingLike) {
                return res.status(400).json({ message: "Like already exists." });
            }

            console.log(existingLike)

            const like = new Like({user: userId, song});
            await like.save();

            res.status(201).json({ message: "like created successfully.", like: {user: userId, song} });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }


    async delete(req, res) {
        const userId = req.user._id;
        const {song} = req.body;


        if (!userId) return res.status(400).json({ message: "Id is required to dislike a song." });
        if(!song) return res.status(400).json({message:"Song is required to dislike a song "});

        try {
            const like = await Like.findOneAndDelete({ user: userId, song});
            if (!like) return res.status(404).json({ message: "Like not found." });

            return res.status(200).json({ message: "Like removed successfully." });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


}

export default LikeController;