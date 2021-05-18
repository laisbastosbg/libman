const Author = require("../models/Author");

module.exports = {
  async index(req, res) {
    const authors = await Author.findAll();

    return res.json(authors);
  },

  async store(req, res) {
    const { name } = req.body;

    const author = await Author.create({ name });

    return res.json(author);
  },

  async delete(req, res) {
    const { author_id } = req.params;
    
    const author = await Author.findByPk(author_id);

    if(!author) {
      return res.status(404).json('Author not find');
    }

    await Author.destroy({
      where: {
        id: author_id,
      }
    });

    return res.status(200).json('success');
  },
};
