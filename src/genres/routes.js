const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getBooksByGenre, getGenreByParams } = require("./controllers");

genreRouter.post("/addgenre", addGenre);

genreRouter.get("/getbooksbygenre", getBooksByGenre);

genreRouter.get("/getgenrebyparams/:genre", getGenreByParams)

module.exports = genreRouter;
