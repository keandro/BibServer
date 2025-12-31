import { Model, DataTypes } from 'sequelize';

class Book extends Model {

  static init(sequelize) {
    super.init( {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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

        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'Autor do livro nulo' },
                notEmpty: { msg: 'Informe o autor do livro' }
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

        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: { args: [10, 13], msg: 'O ISBN deve ter entre 10 e 13 caracteres' },
            }
        }
        
      },
      {
        sequelize,
        modelName: 'book',
        tableName: 'books'
      }
    );
  } 

  static associate(models) {
    // Defina associações aqui, se necessário
  }
};

export { Book };