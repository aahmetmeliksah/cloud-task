import bcrypt from "bcrypt"

import User from "../models/User.js"
import { createError } from "../utils/error.js"

// register a user
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json(user)

        // .redirect("/login")
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
}

// update a specific user
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body });

        res.status(200).json(updatedUser)

        // .redirect("/login")
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
}

// remove a specific user
export const removeUser = async (req, res) => {
    try {
        const removeUser = await User.findByIdAndDelete(req.params.id)

        res.status(200).json(`${removeUser.name} we're sorry to let you go!`)
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }
}

// get a specific user 
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }
}

// get all users 
export const getUsers = async (req, res) => {
    try {
        const users = await User.find()

        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }
}

// login user
export const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return next(createError(404, `User not found!`))

        await bcrypt.compare(req.body.password, user.password, (err, same) => {
            if (same) {
                  req.session.userID = user._id
                // console.log(user._id)

                // destructure to prevent sending password, role of user to client side
                const { password, role, ...otherDetails } = user._doc
                res.status(200).json(otherDetails)
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        })
    }
};