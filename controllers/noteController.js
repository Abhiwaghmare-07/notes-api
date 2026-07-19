const Note = require("../models/Note");

const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and Description are required",
      });
    }

    const note = await Note.create({
      title,
      description,
        owner: req.user._id,
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Get Note By ID
const getNoteById = async (req, res) => {
  try {
     const note = await Note.findOne({
  _id: req.params.id,
  owner: req.user._id,
});

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getAllNotes = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const skip = (page - 1) * limit;

    const { search } = req.query;

    let filter = {};

    if (search) {
      filter = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
        ],
      };
    }

   const notes = await Note.find({
  owner: req.user._id,
  ...filter,
})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalNotes = await Note.countDocuments(filter);

    res.status(200).json({
      totalNotes,
      currentPage: page,
      totalPages: Math.ceil(totalNotes / limit),
      notes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
      },
      {
        new: true,
      }
    );

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete Note
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
