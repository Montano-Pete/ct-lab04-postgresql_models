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
    try {
      const movie = {
        id: '1',
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        yearReleased: 1994,
        domesticBoxOffice: '$28,699,976'
      };

      res.send(movie);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
  })
  .put('/:id', async (req, res, next) => {
  })
  .delete('/:id', async (req, res, next) => {
  });
