import express from 'express'
import { getAllProjects } from '../controllers/Project.js'

const router = express.Router()


//get all projects
router.get('/', getAllProjects)

export default router