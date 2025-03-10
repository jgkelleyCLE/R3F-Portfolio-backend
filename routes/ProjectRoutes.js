import express from 'express'
import { getAllProjects, getProjectById } from '../controllers/Project.js'

const router = express.Router()


//get all projects
router.get('/', getAllProjects)

//get project by id
router.get('/:id', getProjectById)

export default router