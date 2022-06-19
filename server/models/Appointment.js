import mongoose from 'mongoose'

const { Schema } = mongoose

const AppointmentSchema = new Schema({
    reason: {
        type: String,
    },

    isBooked: {
        tyoe: Boolean,
        default: false
    },

    date: {
        type: Date,
        required: true
    },

    hour: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const Appointment = mongoose.model('Appointment', AppointmentSchema)

export default Appointment