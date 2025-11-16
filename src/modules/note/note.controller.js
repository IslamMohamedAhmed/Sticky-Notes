import { noteModel } from "../../../Database/models/noteModel.js";
import mongoose from 'mongoose';
const addNote = async (req, res) => {
    req.body.createdBy = req.userId;
    await noteModel.insertMany(req.body);
    res.json({ message: "note was added successfully" });
};

const updateNote = async (req, res) => {
    let noteExist = await noteModel.findById(req.params.id);
    if (!noteExist) {
        return res.status(404).json({ message: "note not found" });
    }
    if (req.userId !== noteExist.createdBy._id.toString()) {
        return res.status(403).json({ message: "forbidden" });
    }
    let note = await noteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Success", note });
};

const deleteNote = async (req, res) => {
    let noteExist = await noteModel.findById(req.params.id);
    if (!noteExist) {
        return res.status(404).json({ message: "note not found" });
    }
    if (req.userId !== noteExist.createdBy._id.toString()) {
        return res.status(403).json({ message: "forbidden" });
    }
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
