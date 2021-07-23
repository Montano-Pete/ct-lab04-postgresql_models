import { Router } from 'express';
import Album from '../models/Album';

export default Router().post('/', async (req, res, next) => {
  try {
    const album = await Album.insert(req.body);
    res.send(album);
  } catch (err) {
    next(err);
  }
});
