const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getBooksByGenre, getGenreByParams } = require("./controllers");

genreRouter.post("/addgenre", addGenre);
// add genre by providing genre key in request body

genreRouter.get("/getbooksbygenre", getBooksByGenre);
// get books of a genre by providing genre key in request body

genreRouter.get("/getgenrebyparams/:genre", getGenreByParams)
// get books of a genre with corresponding authors by providing genre as a parameter. No body required

module.exports = genreRouter;
