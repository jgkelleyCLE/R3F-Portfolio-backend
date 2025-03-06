import Project from "../models/ProjectModel.js";

export const getAllProjects = async(req, res) => {

    try {
        
        const projects = await Project.find()
        res.status(200).json(projects)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}