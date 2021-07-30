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
      const pie = [{ 'id': '1', 'slice': true, 'sliceQuantity': 3, 'type': 'Marionberry', 'wholePie': false }, { 'id': '2', 'slice': false, 'sliceQuantity': 0, 'type': 'Apple', 'wholePie': true }, { 'id': '3', 'slice': true, 'sliceQuantity': 1, 'type': 'Chocolate', 'wholePie': false }];

      res.send(pie);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
  })
  .delete('/:id', async (req, res, next) => {
  });
