const { Router } = require("express");
const router = Router();
const Book = require("./model");
const { getAllBooks, addABook, deleteabook, getByAuthor, updateBookByTitle, deleteAllBooks, getByTitleParams } = require("./controllers");

router.post("/addabook", addABook);
// add a book by providing title key, author key and genre key in request body. Any genre and author that dont already exist will be created and added to relavent tables

router.get("/listallbooks", getAllBooks);
// list all books, no body requires

router.get("/getbyauthor", getByAuthor);
// get books by author by providing author key in request body

router.get("/getbytitleparams/:title", getByTitleParams);
// get book by title by providing title as a parameter

router.put("/updatebookbytitle", updateBookByTitle);
// update book by providing title key in request body. Note: author and genre are not in the book table and need to be updated by AuthorId and GenreId

router.delete("/deleteabook", deleteabook);
// delete a book by providing the title key in request body

router.delete("/deleteallbooks", deleteAllBooks);
// delete all books. no body required

module.exports = router;
