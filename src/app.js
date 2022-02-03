require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const {
  addFilm,
  list,
  deleteFilm,
  updateFilm,
  findFilm,
} = require("./film/filmMethods");
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
  } else if (argvObj.update) {
    const requestObj = movieObjFromArgs(argvObj);
    let updateObj = {};
    updateObj[argvObj.updateKey] = argvObj.updateValue;
    updateObj = movieObjFromArgs(updateObj); // sanitises input
    await updateFilm(requestObj, updateObj);
  } else if (argvObj.find) {
    const requestObj = movieObjFromArgs(argvObj);
    await findFilm(requestObj);
  } else {
    console.log("incorrect command");
  }
  mongoose.connection.close();
};

app();
