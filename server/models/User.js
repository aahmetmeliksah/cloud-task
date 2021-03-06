import mongoose from 'mongoose'
import bcrypt from "bcrypt"

const { Schema } = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ["patient", "doctor", "admin"],
        default: "patient",
    },

    workingHours: [
        { type: Number, default: 10 },
        { type: Number, default: 13 },
        { type: Number, default: 14 },
        { type: Number, default: 19 }
    ],

    appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointments",
        },
    ],
},
    { timestamps: true }
);

UserSchema.pre("save", function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', UserSchema)

export default User