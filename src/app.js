require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { addFilm, list } = require("./film/filmMethods");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argv.add) {
    await addFilm({
      name: argv.title,
      actor: argv.actor,
    });
  } else if (argv.list) {
    await list();
  } else {
    console.log("incorrect command");
  }
  mongoose.connection.close();
};

app();
