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
      const movies = [{ 'director': 'Christopher Nolan', 'domesticBoxOffice': '$534,858,444', 'title': 'The Dark Knight', 'yearReleased': 2008 }, { 'director': 'Frank Darabont', 'domesticBoxOffice': '$28,699,976', 'id': '1', 'title': 'The Shawshank Redemption', 'yearReleased': 1994 }, { 'director': 'Steven Spielberg', 'domesticBoxOffice': '$404,214,720', 'id': '2', 'title': 'Jurassic Park', 'yearReleased': 1993 }, { 'director': 'Ridley Scott', 'domesticBoxOffice': '$32,868,943', 'id': '3', 'title': 'Blade Runner', 'yearReleased': 1982 }];

      res.send(movies);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
  })
  .delete('/:id', async (req, res, next) => {
  });
