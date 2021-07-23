import { Router } from 'express';
import Album from '../models/Album';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const album = await Album.insert(req.body);
      res.send(album);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const album = await Album.getById(id);

      res.send(album);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const allAlbums = await Album.getAll();

      res.send(allAlbums);
    } catch (err) {
      next(err);
    }
  });
