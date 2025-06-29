import { noteModel } from "../../Database/models/noteModel.js"

export const findNote = async (req, res, next) => {
    let note = await noteModel.findById(req.params.id);
    if (!note) {
        return res.json({ message: "note is not found" });
    }
    if (note.createdBy.toString() !== req.userId) {
        return res.json({ message: "Unauthorized: You don't own this note" });
    }
    next();
}
