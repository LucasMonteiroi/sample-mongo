const express = require('express');
const routes = express.Router();
const ItemController = require('./app/controllers/ItemController');

routes.get('/item', async (req, res) => ItemController.getAll(req, res));
routes.get('/item/:id', async (req, res) => ItemController.getById(req, res));
routes.post('/item/bulk', async (req, res) => ItemController.bulkInsert(req, res));
routes.post('/item', async (req, res) => ItemController.create(req, res));
routes.put('/item/:id', async (req, res) => ItemController.update(req, res));
routes.delete('/item/:id', async (req, res) => ItemController.delete(req, res));

module.exports = routes;