const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getBooksByAuthor, getAuthorByParams } = require("./controllers");

authorRouter.post("/addauthor", addAuthor);

authorRouter.get("/getbooksbyauthor", getBooksByAuthor);

authorRouter.get("/getauthorbyparams/:author", getAuthorByParams);

module.exports = authorRouter;
