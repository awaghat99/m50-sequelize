const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getBooksByAuthor, getAuthorByParams } = require("./controllers");

authorRouter.post("/addauthor", addAuthor);
//add author by providing author key in request bosy

authorRouter.get("/getbooksbyauthor", getBooksByAuthor);
// get all books from author by providing author key in request body

authorRouter.get("/getauthorbyparams/:author", getAuthorByParams);
// get all books from author by providing author as a parameter

module.exports = authorRouter;
