import { Model, DataTypes } from 'sequelize';
import { uuidv7 } from 'uuidv7';

class Publisher extends Model {

  static init(sequelize) {
    super.init( {

        publisherId: {
            type: DataTypes.UUID,
            defaultValue: () => uuidv7(),
            primaryKey: true
        },

        publisherName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'Nome da editora nulo' },
                notEmpty: { msg: 'Informe o nome da editora' }
            }
        },

      },
      {
        sequelize,
        modelName: 'publisher',
        tableName: 'publishers'
      }
    );
  } 

  static associate(models) {
    this.hasMany(models.book, { foreignKey: 'publisher_id', as: 'books' });
  }
};

export { Publisher };