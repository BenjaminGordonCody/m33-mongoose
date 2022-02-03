require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { addFilm, list, deleteFilm } = require("./film/filmMethods");
const { movieObjFromArgs } = require("./obj");
const argvObj = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argvObj.add) {
    await addFilm({
      title: argvObj.title,
      actor: argvObj.actor,
    });
  } else if (argvObj.list) {
    await list();
  } else if (argvObj.delete) {
    const requestObj = movieObjFromArgs(argvObj);
    console.log(requestObj);
    await deleteFilm(requestObj);
  } else {
    console.log("incorrect command");
  }
  mongoose.connection.close();
};

app();
