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
      const fruit = await Fruit.getAll();

      res.send(fruit);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedFruit = { id: '1', name: 'Lemon', sweet: false, treeFruit: true };

      res.send(updatedFruit);
    } catch (err) {
      next(err);
    }
  });
