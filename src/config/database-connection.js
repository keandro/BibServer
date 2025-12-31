import Sequelize from 'sequelize';
import { databaseConfig } from './database-config.js';

import { Book } from '../models/Book.js';

const sequelize = new Sequelize(databaseConfig);

Book.init(sequelize);

Book.associate(sequelize.models);

databaseInserts();

function databaseInserts() {
    (async () => {

        await sequelize.sync({ force: true });

        const book1 = await Book.create({
            title: 'Dom Casmurro',
            author: 'Machado de Assis',
            publishedYear: 1899,
            isbn: '9783161484100'
        });

        const book2 = await Book.create({
            title: '1984',
            author: 'George Orwell',
            publishedYear: 1949,
            isbn: '9780451524935'
        });

        console.log('DB iniciado')
    })()
};

export default sequelize;