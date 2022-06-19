import bcrypt from "bcrypt"

import Appointment from "../models/Appointment.js"
import { createError } from "../utils/error.js"

// create an appointments
export const createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);

        res.status(201).json(appointment)

        // .redirect("/login")
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
}

// update a specific appointment
export const updateAppointment = async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, { $set: req.body });

        res.status(200).json(updatedAppointment)

        // .redirect("/login")
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
}

// remove a specific appointment
export const removeAppointment = async (req, res) => {
    try {
        const removeAppointment = await Appointment.findByIdAndDelete(req.params.id)

        res.status(200).json(`Appointment removed`)
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }
}

// get a specific appointment
export const getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id)

        res.status(200).json(appointment)
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }
}

// get all appointments 
export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()

        res.status(200).json(appointments)
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }
}