import { noteModel } from "../../../Database/models/noteModel.js";
import mongoose from 'mongoose';
const addNote = async (req, res) => {
    if (req.body.createdBy.toString() !== req.userId) {
        return res.json({ message: "error happened while adding tthe note try again later!!" });
    }
    await noteModel.insertMany(req.body);
    res.json({ message: "note was added successfully" });
};

const updateNote = async (req, res) => {
    note = await noteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Success", note });
};

const deleteNote = async (req, res) => {
    await noteModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Success" });
};

const getNotes = async (req, res) => {

    let notes = await noteModel.find({ createdBy: req.userId })
        .sort({ createdAt: -1 })
        .populate('createdBy', 'name');
    res.json({ message: "success", notes });
};

export {
    addNote,
    updateNote,
    deleteNote,
    getNotes
};
