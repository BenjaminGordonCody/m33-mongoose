const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  actor: {
    type: String,
    default: "actor unknown",
  },
});

const FilmModel = mongoose.model("mongooseFilmDB", filmSchema);

module.exports = FilmModel;
