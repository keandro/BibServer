import Sequelize from 'sequelize';
import { databaseConfig } from './database-config.js';

import { Book } from '../models/Book.js';
import { Author } from '../models/Author.js';
import { Genre } from '../models/Genre.js';
import { Publisher } from '../models/Publisher.js';

const sequelize = new Sequelize(databaseConfig);

Author.init(sequelize);
Genre.init(sequelize);
Publisher.init(sequelize);
Book.init(sequelize);

Author.associate(sequelize.models);
Genre.associate(sequelize.models);
Publisher.associate(sequelize.models);
Book.associate(sequelize.models);

databaseInserts();

function databaseInserts() {
    (async () => {

        await sequelize.sync({ force: true });

        const author1 = await Author.create({
            name: 'Machado de Assis',
        });

        const author2 = await Author.create({
            name: 'George Orwell',
        });
        
        const genre1 = await Genre.create({
            genreName: 'Ficção',
        });

        const genre2 = await Genre.create({
            genreName: 'Clássico',
        });

        const publisher1 = await Publisher.create({
            publisherName: 'Editora A',
        });

        const publisher2 = await Publisher.create({
            publisherName: 'Editora B',
        });


        const book1 = await Book.create({
            isbn: '9783161484100',
            title: 'Dom Casmurro',
            publishedYear: 1899,
            author_id: author1.authorId,
            genre_id: genre1.genreId,
            publisher_id: publisher1.publisherId
        });

        const book2 = await Book.create({
            isbn: '9780451524935',
            title: '1984',
            publishedYear: 1949,
            author_id: author2.authorId,
            genre_id: genre2.genreId,
            publisher_id: publisher2.publisherId
        });

        console.log('DB iniciado')
    })()
};

export default sequelize;