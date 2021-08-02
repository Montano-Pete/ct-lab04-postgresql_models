import { Router } from 'express';
import Book from '../models/Book';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const book = {
        id: '1',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        genre: 'Fantasy',
        isbn10: 9780061122415,
        pageCount: 197
      };

      res.send(book);
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
