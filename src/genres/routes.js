const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getBooksByGenre } = require("./controllers");

genreRouter.post("/addgenre", addGenre);

genreRouter.get("/getbooksbygenre", getBooksByGenre);

module.exports = genreRouter;
