import express from "express"
const router = express.Router();

// controllers
import { 
    createAppointment,
    updateAppointment,
    removeAppointment,
    getAppointment,
    getAppointments
 } from "../controllers/appointments.js"

// middlewares
// import { roleMiddlewareForCreatingAppointment } from "../middlewares/roleMiddleware.js"

// routes
router.route("/create-appointment").post(roleMiddlewareForCreatingAppointment(["admin", "doctor"]), createAppointment); // create appointment // only doctors and admin can do this
router.route("/:id").post(updateAppointment); // update appointment
router.route("/:id").delete(removeAppointment); // remove an appointment
router.route("/:id").get(getAppointment); // get an appointment
router.route("/").get(getAppointments); // get appointments

export default router