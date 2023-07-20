import express from "express";
import {addNote, clearCompleted, deleteNote, getAllNote, updateNote} from "../controllers/Notes.js";
import authenticateUser from "../middlewares/auth.js";

const router = express.Router();

// router.get('/AllNotes' , authenticateUser, getAllNote);
router.post('/add-note', authenticateUser, addNote);
router.post('/clearCompleted', authenticateUser, clearCompleted)
router.route('/:id').delete(authenticateUser, deleteNote)
    .patch(authenticateUser, updateNote);

export default router;