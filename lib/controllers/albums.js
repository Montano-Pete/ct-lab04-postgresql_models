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
      const allAlbums = [{
        id: '1',
        name: 'Yeezus',
        artist: 'Kanye West',
        yearReleased: 2013,
      },
      {
        id: '2',
        name: 'Oddments',
        artist: 'King Gizzard and the Lizard Wizard',
        yearReleased: 2014,
      },
      {
        id: '3',
        name: 'Abbey Road',
        artist: 'The Beatles',
        yearReleased: 1969,
      },
      {
        id: '4',
        name: 'Room On Fire',
        artist: 'The Strokes',
        yearReleased: 2003,
      }];

      res.send(allAlbums);
    } catch (err) {
      next(err);
    }
  });
