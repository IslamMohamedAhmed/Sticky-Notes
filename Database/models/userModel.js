import mongoose from "mongoose";

const model = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    roles: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, { timestamps: true });


export const userModel = mongoose.model('users', model);