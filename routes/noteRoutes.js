const express = require("express");

const router = express.Router();

const {
  createNote,
  getAllNotes,
} = require("../controllers/noteController");
router.get("/", getAllNotes);
router.post("/", createNote);


module.exports = router;