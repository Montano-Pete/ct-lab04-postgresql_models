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
  });
