import { Router } from 'express';
import Pie from '../models/Pie';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const pie = await Pie.insert(req.body);

      res.send(pie);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const pie = await Pie.getById(id);

      res.send(pie);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const pie = await Pie.getAll();

      res.send(pie);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const pie = {
        id: '1',
        type: 'Lemon Meringue',
        wholePie: false,
        slice: true,
        sliceQuantity: 2 };

      res.send(pie);
    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
  });
