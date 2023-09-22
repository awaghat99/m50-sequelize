const { Router } = require("express");
const router = Router();
const Book = require("./model");
const { getAllBooks, addABook, deleteabook, getByAuthor, updateBookByTitle, deleteAllBooks, getByTitleParams } = require("./controllers");

router.post("/addabook", addABook);

router.get("/listallbooks", getAllBooks);

router.get("/getbyauthor", getByAuthor);

router.get("/getbytitleparams/:title", getByTitleParams);

router.put("/updatebookbytitle", updateBookByTitle);

router.delete("/deleteabook", deleteabook);

router.delete("/deleteallbooks", deleteAllBooks);

module.exports = router;
