const Book = require("../models/Book");
const Author = require("../models/Author");

module.exports = {
  async index(req, res) {
    const books = await Book.findAll();

    return res.json(books);
  },

  async store(req, res) {
    const { author_id } = req.params;
    const { title, synopsis } = req.body;

    const author = await Author.findByPk(author_id);

    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }

    const book = await Book.create({ title, synopsis, author_id });

    return res.json(book);
  },

  async delete(req, res) {
    const { book_id } = req.params;

    const book = await Book.findByPk(book_id);

    if(!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    await Book.destroy({
      where: {
        id: book_id,
      }
    });

    return res.status(200).json('success');
  },

  async findByAuthor(req, res) {
    const { author_id } = req.params;

    const author = await Author.findByPk(author_id);

    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }

    const books = await Book.findAll({
      where: {
        author_id
      }
    });

    return res.json(books);
  }
};
