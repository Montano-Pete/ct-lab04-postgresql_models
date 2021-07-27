import { Router } from 'express';
import Fruit from '../models/Fruit';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const fruit = { id: '1', name: 'red apple', sweet: true, treeFruit: true };
      res.send(fruit);
    } catch (err) {
      next(err);
    }
  });
