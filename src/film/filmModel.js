const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  name: {
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
