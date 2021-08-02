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
      const books = await Book.getAll();

      res.send(books);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, author, genre, isbn10, pageCount } = req.body;

      const updatedBook = await Book.updateById(id, { title, author, genre, isbn10, pageCount });

      res.send(updatedBook);
    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deletedBook = {
        id: '1',
        title: 'The Three-Body Problem',
        author: 'Cixin Liu',
        genre: 'Science-Fiction',
        isbn10: '9780765382030',
        pageCount: 416
      };

      res.send({
        message: `You deleted ${deletedBook.title}, one of my favorite books. I am sad.`
      });
    } catch (err) {
      next(err);
    }
  });
