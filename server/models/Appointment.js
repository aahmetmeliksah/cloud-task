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

    hour: {
        type: String,
        required: true
    },

    unavaliableHours: [
        {date: Date, hours:{ type: [String]}}
    ]
},
    { timestamps: true }
);

const Appointment = mongoose.model('Appointment', AppointmentSchema)

export default Appointment