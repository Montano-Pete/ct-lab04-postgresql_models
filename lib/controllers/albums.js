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
      const album = { id: '1', name: 'Oddments', artist: 'King Gizzard & The Lizard Wizard', yearReleased: 2014 };

      res.send(album);
    } catch (err) {
      next(err);
    }
  });
