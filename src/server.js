import express from "express";

import sequelize from './config/database-connection.js';

//await sequelize.sync();


const app = express();

app.listen(3333);
