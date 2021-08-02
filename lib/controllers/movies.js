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
      const { id } = req.params;
      const movie = await Movie.getById(id);

      res.send(movie);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const movies = await Movie.getAll();

      res.send(movies);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, director, yearReleased, domesticBoxOffice } = req.body;

      const updatedMovie = await Movie.updateById(id, { title, director, yearReleased, domesticBoxOffice });

      res.send(updatedMovie);
    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
  });
