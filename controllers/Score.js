import Score from "../models/ScoreModel.js";

//GET SCORES
export const getScores = async(req, res) => {

    try {
        
        const scores = await Score.find().sort({ time: 1 }).limit(15)
        res.json(scores)

    } catch (error) {
        res.status(404).json({message: error.message})
    }

}

//POST SCORE
export const postScore = async(req, res) => {

    const { username, time } = req.body

    try {
        
        const newScore = await Score.create({username, time})
        res.status(201).json(newScore)

    } catch (error) {
        res.status(409).json({message: error.message})
    }

}