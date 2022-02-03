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
  mongoose.connection.close();
};

exports.list = async () => {
  try {
    let results = await FilmModel.find({});
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};
