import { Router } from 'express';
import Book from '../models/Book';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const book = await Book.insert(req.body);

      res.send(book);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const book = await Book.getById(id);

      res.send(book);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const books = [{ 'author': 'Paulo Coelho', 'genre': 'Fantasy', 'id': '1', 'isbn10': '9780061122415', 'pageCount': 197, 'title': 'The Alchemist' }, { 'author': 'Cixin Liu', 'genre': 'Science-Fiction', 'id': '2', 'isbn10': '9780765382030', 'pageCount': 416, 'title': 'The Three-Body Problem' }, { 'author': 'Lee Haprer', 'genre': 'Bildungsroman', 'id': '3', 'isbn10': '0060935464', 'pageCount': 336, 'title': 'To Kill A Mockingbird' }];

      res.send(books);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
  })
  .delete('/:id', async (req, res, next) => {
  });
