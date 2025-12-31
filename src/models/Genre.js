import { Model, DataTypes } from 'sequelize';
import { uuidv7 } from 'uuidv7';

class Genre extends Model {

  static init(sequelize) {
    super.init( {

        genreId: {
            type: DataTypes.UUID,
            defaultValue: () => uuidv7(),
            primaryKey: true
        },

        genreName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'Nome do gênero nulo' },
                notEmpty: { msg: 'Informe o nome do gênero' }
            }
        },

      },
      {
        sequelize,
        modelName: 'genre',
        tableName: 'genres'
      }
    );
  } 

  static associate(models) {
    this.hasMany(models.book, { foreignKey: 'genre_id', as: 'books' });
  }
};

export { Genre };