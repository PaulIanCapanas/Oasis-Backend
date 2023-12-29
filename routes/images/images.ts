import express from 'express';
import Knex from 'knex';
import ImageController from '../../controller/ImageController';

const knexConfig = require('./knexfile'); // Adjust the path accordingly
const knex = Knex(knexConfig);

const app = express();

const imageController = new ImageController(knex);

app.post('/upload', (req, res) => imageController.uploadImage(req, res));