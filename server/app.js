import express  from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Import routes 
import appointmentsRoute from './routes/appointments.js'

const app = express()

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

// User routes
app.use('/appointments', appointmentsRoute)

// Run server
const PORT = 5000
app.listen(PORT, ()=> console.log(`Server started running at port ${PORT}`))

