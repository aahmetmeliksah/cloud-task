import express from "express"
const router = express.Router();

// controllers
import { 
    createUser,
    updateUser,
    removeUser,
    getUser,
    getUsers,
    loginUser
 } from "../controllers/auth.js"

// middlewares
import { adminAndUserOnlyRole } from "../middlewares/roleMiddleware.js"

// routes
router.route("/signup").post(createUser); // register a User
router.route("/login").post(loginUser); // login user
router.route("/:id").post(/*adminAndUserOnlyRole(["admin"]),*/ updateUser); // update a User
router.route("/:id").delete(removeUser); // remove a User
router.route("/:id").get(getUser); // get a User
router.route("/").get(getUsers); // get Users

export default router