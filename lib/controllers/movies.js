import { Router } from 'express';
import Movie from '../models/Movie';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const movie = await Movie.insert(req.body);

      res.send(movie);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
  })
  .get('/', async (req, res, next) => {
  })
  .put('/:id', async (req, res, next) => {
  })
  .delete('/:id', async (req, res, next) => {
  });
