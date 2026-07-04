import express, { Router } from 'express'
import { createNotes, deleteNotes, getNotes, updateNote } from '../controllers/noteController.js';

const router=express.Router();
router.post("/",createNotes)
router.get("/",getNotes)
router.delete("/:id",deleteNotes);
router.put("/:id",updateNote)

export default router;