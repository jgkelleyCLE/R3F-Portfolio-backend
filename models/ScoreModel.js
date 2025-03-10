import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    time: {
        type: Number,
        required: true,
    },
    device: {
        type: String,
        required: false,
    },
    character: {
        type: String,
        required: false,
    }
}, { timestamps: true });

const Score = new mongoose.model('Score', ScoreSchema);

export default Score
