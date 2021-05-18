const express = require("express");
const BookController = require("./controllers/BookControler");
const AuthorController = require("./controllers/AuthorController");

const routes = express.Router();

routes.get("/books", BookController.index);
routes.post("/authors/:author_id/books", BookController.store);
routes.get("/authors/:author_id/books", BookController.findByAuthor);
routes.delete("/books/:book_id", BookController.delete);

routes.get("/authors", AuthorController.index);
routes.post("/authors", AuthorController.store);
routes.delete("/authors/:author_id", AuthorController.delete);

module.exports = routes;
