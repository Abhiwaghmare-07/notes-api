const express = require("express");

const router = express.Router();

const {
  createNote,
  getAllNotes,
   getNoteById,
   updateNote,
   deleteNote
} = require("../controllers/noteController");
 const protect = require("../middleware/authMiddleware"); 
router.get("/",protect, getAllNotes);
router.get("/:id",protect,  getNoteById);
router.post("/",protect, createNote);
router.put("/:id",protect, updateNote);
router.delete("/:id",protect, deleteNote);
module.exports = router;