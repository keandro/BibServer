import { Model, DataTypes } from 'sequelize';
import { uuidv7 } from 'uuidv7';

class Author extends Model {

  static init(sequelize) {
    super.init( {

        authorId: {
            type: DataTypes.UUID,
            defaultValue: () => uuidv7(),
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'Nome do autor nulo' },
                notEmpty: { msg: 'Informe o nome do autor' }
            }
        },

      },
      {
        sequelize,
        modelName: 'author',
        tableName: 'authors'
      }
    );
  } 

  static associate(models) {
    this.hasMany(models.book, { foreignKey: 'author_id', as: 'books' });
  }
};

export { Author };