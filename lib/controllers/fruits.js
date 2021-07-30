import { Router } from 'express';
import Fruit from '../models/Fruit';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const fruit = await Fruit.insert(req.body);

      res.send(fruit);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const fruit = await Fruit.getById(id);

      res.send(fruit);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const fruit = [{ 'id': '1', 'name': 'Lemon', 'sweet': false, 'treeFruit': true }, { 'id': '2', 'name': 'Watermelon', 'sweet': true, 'treeFruit': false }, { 'id': '3', 'name': 'Granny Smith Apple', 'sweet': false, 'treeFruit': true }, { 'id': '4', 'name': 'Blueberry', 'sweet': true, 'treeFruit': false }];

      res.send(fruit);
    } catch (err) {
      next(err);
    }
  });
