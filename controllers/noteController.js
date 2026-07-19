const Note = require("../models/Note");

const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const note = await Note.create({
      title,
      description,
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createNote,
  getAllNotes,
};