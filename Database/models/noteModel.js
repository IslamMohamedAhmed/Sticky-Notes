import mongoose from "mongoose";

const model = new mongoose.Schema({
    title: String,
    description: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    }
}, { timestamps: true });

export const noteModel = mongoose.model('notes', model);