const Note = require('../models/noteModels');

console.log("ISI NOTE:", Note); 

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error ambil data" });
  }
};

exports.createNote = async (req, res) => {
  try {
    const { judul, isi } = req.body;
    const note = await Note.create({ judul, isi });
    res.json(note);
  } catch (error) {
    console.error("ERROR ASLI:", error);
    res.status(500).json({
      message: "Error tambah data",
      error: error.message
    });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { judul, isi } = req.body;

    await Note.update({ judul, isi }, { where: { id } });
    res.json({ message: "Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error update data" });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    await Note.destroy({ where: { id } });
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error delete data" });
  }
};