const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema ({
  title: {type: String, required: true, unqiue: true},
  date: Date,
  url: {type: String, required: true, unqiue: true},
  createdAt: {type: Date, default: Date.now()}
});

const Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;