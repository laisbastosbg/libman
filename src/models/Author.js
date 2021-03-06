const { Model, DataTypes } = require("sequelize");

class Author extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Author;
