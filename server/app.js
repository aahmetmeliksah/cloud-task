"use strict"

import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import session from "express-session"
import MongoStore from "connect-mongo"

// Import routes 
import appointmentsRoute from './routes/appointments.js'
import userRoute from './routes/users.js'

const app = express()
dotenv.config()

// Connect DB
mongoose.connect('mongodb://localhost/cloud-task-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log(`DB connected!`))
    .catch((err) => console.log(err)) 

// Global variables
global.userIN = null

// Middlewares
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(session({
  secret: "my_keyboard_cat",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: "mongodb://localhost/cloud-task-db" }), // add this when users can logout
}))


// Routes
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/appointments', appointmentsRoute)
app.use('/user', userRoute)

// Run server
const PORT = 5000
app.listen(PORT, 
    () => console.log(`Server started running at port ${PORT}`)
    )

