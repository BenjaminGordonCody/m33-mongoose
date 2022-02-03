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

exports.list = async () => {
  try {
    let results = await FilmModel.find({});
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteFilm = async (requestObj) => {
  try {
    console.log(requestObj);
    await FilmModel.findOneAndDelete(requestObj);
    console.log("delete request sent");
  } catch (error) {
    console.log(error);
  }
};
