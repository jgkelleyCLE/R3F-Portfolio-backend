import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import scoresRoutes from './routes/ScoreRoutes.js'
import projectRoutes from './routes/ProjectRoutes.js'
import emailRoutes from './routes/EmailRoutes.js'

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

//MONGOOSE
mongoose.connect(process.env.MONGO_URI)

let connectionObj = mongoose.connection

connectionObj.on('error', ()=> {
    console.log('Error connecting to database')
})

connectionObj.on('connected', ()=> {
    console.log('Connected to database')
})


//ROUTES
app.use('/api/scores', scoresRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/mail', emailRoutes)

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})