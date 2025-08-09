import exprees from 'express';
import { Createnote, DeleteNote, GetNotes, UpdateNote } from '../Controller/NoteContrroler.js';
export const NoteRouter = exprees.Router();
NoteRouter.get("/getNotes",GetNotes)
NoteRouter.post("/createNote",Createnote)
NoteRouter.delete("/deleteNote/:id",DeleteNote)
NoteRouter.patch("/updateNot/:id",UpdateNote)