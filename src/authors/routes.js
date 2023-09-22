const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getBooksByAuthor } = require("./controllers");

authorRouter.post("/addauthor", addAuthor);

authorRouter.get("/getbooksbyauthor", getBooksByAuthor)

module.exports = authorRouter;
