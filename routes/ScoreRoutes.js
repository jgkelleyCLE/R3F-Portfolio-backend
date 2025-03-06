import express from 'express'
import { getScores, postScore } from '../controllers/Score.js'

const router = express.Router()

//get scores
router.get('/', getScores)

//post score
router.post('/', postScore)

export default router