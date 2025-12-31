import { Model, DataTypes } from 'sequelize';

class Book extends Model {

  static init(sequelize) {
    super.init( {

        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: { args: [10, 13], msg: 'O ISBN deve ter entre 10 e 13 caracteres' },
            },
            primaryKey: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'Título do livro nulo' },
                notEmpty: { msg: 'Informe o título do livro' }
            }
        },

        publishedYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: 'Ano de publicação deve ser um número inteiro' },
                notNull: { msg: 'Ano de publicação nulo' },
            }
        },
        
      },
      {
        sequelize,
        modelName: 'book',
        tableName: 'books'
      }
    );
  } 

  static associate(models) {
    this.belongsTo(models.author, { foreignKey: 'author_id', as: 'author' });
    this.belongsTo(models.genre, { foreignKey: 'genre_id', as: 'genre' });
    this.belongsTo(models.publisher, { foreignKey: 'publisher_id', as: 'publisher' });
  }
};

export { Book };