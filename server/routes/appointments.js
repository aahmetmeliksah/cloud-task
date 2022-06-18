import express  from 'express';

// Controllers
import { getAppointments } from '../controllers/appointments.js'

const router = express.Router()

router.route('/').get(getAppointments)

export default router;