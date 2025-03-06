import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    },
    techStack: [
        {
            type: String,
            required: true
        }
    ],
    images: [
        {
            id: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            caption: {
                type: String,
                required: true
            }
        }
    ]
}, { timestamps: true })

const Project = mongoose.model('Project', ProjectSchema)

export default Project