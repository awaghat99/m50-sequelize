const { Router } = require("express");
const router = Router();
const Book = require("./model");
const { getAllBooks, addABook, updateAuthor, deleteabook } = require("./controllers");

router.post("/addabook", addABook);

router.get("/listallbooks", getAllBooks);

router.put("/updateauthor", updateAuthor);

router.delete("/deleteabook", deleteabook);

module.exports = router;
