import express from 'express'
import { sendContact } from '../controllers/Contact'

const router = express.Router()

router.post('/contact', sendContact)

export default router