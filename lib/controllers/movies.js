import { Router } from 'express';
import Movie from '../models/Movie';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const movie = {
        id: '1',
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        yearReleased: 2008,
        domesticBoxOffice: '$534,858,444'
      };

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
