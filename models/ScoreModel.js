import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    time: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

const Score = new mongoose.model('Score', ScoreSchema);

export default Score
