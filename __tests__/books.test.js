import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Book from '../lib/models/Book.js';

describe('book routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a book VIA post', async () => {
    const book = {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      genre: 'Fantasy',
      isbn10: '9780061122415',
      pageCount: 197
    };

    const res = await request(app)
      .post('/api/v1/books')
      .send(book);

    expect(res.body).toEqual({
      id: '1',
      ...book
    });
  });

  it('gets a book by id via GET', async () => {
    const book = await Book.insert({
      title: 'The Three-Body Problem',
      author: 'Cixin Liu',
      genre: 'Science-Fiction',
      isbn10: '9780765382030',
      pageCount: 416
    });

    const res = await request(app).get(`/api/v1/books/${book.id}`);

    expect(res.body).toEqual(book);
  });
});
