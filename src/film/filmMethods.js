const mongoose = require("mongoose");
const FilmModel = require("./filmModel");

exports.addFilm = async (newFilm) => {
  try {
    let film = new FilmModel(newFilm);
    await film.save();
    console.log("film is saved to db");
  } catch (error) {
    console.log(error);
  }
};
