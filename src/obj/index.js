exports.movieObjFromArgs = (yargs) => {
  const possAttributes = ["title", "actor", "date", "genre", "director"];
  const movieObj = {};
  possAttributes.forEach((element) => {
    if (yargs[element]) {
      movieObj[element] = yargs[element];
    }
  });
  return movieObj;
};
