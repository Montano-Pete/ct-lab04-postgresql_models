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
      const { id } = req.params;
      const { type, wholePie, slice, sliceQuantity } = req.body;

      const pie = await Pie.updateById(id, { type, wholePie, slice, sliceQuantity });

      res.send(pie);
    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deletedPie = {
        id: '1',
        type: 'Lemon Meringue',
        wholePie: true,
        slice: false,
        sliceQuantity: 0
      };
      res.send({
        message: `You deleted ${deletedPie.type}, we cannot be friends..`
      });
    } catch (err) {
      next(err);
    }
  });
