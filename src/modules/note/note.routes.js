import express from 'express';
import { addNote, deleteNote, getNotes, updateNote } from './note.controller.js';
import { findNote } from '../../middleware/checkNoteExists.js';
import { validateToken } from '../../middleware/validateToken.js';

const noteRouter = express.Router();


noteRouter.route('/notes').post(validateToken, addNote).get(validateToken, getNotes);
noteRouter.route('/notes/:id').put(validateToken, findNote, updateNote).delete(validateToken, findNote, deleteNote);
export default noteRouter;
