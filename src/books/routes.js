const { Router } = require("express");
const router = Router();
const Book = require("./model");
const { getAllBooks, addABook, updateAuthor, deleteabook, getByAuthor, updateBookByTitle, deleteAllBooks } = require("./controllers");

router.post("/addabook", addABook);

router.get("/listallbooks", getAllBooks);

router.get("/getbyauthor", getByAuthor);

router.put("/updatebookbytitle", updateBookByTitle);

router.delete("/deleteabook", deleteabook);

router.delete("/deleteallbooks", deleteAllBooks);

module.exports = router;
