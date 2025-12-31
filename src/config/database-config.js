import 'dotenv/config';

/*
export const databaseConfig = {
  dialect: 'sqlite',
  storage: './database.sqlite',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};
*/

export const databaseConfig = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};