import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Movie from '../lib/models/Movie.js';

describe('movie routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a movie VIA post', async () => {
    const movie = {
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      yearReleased: 2008,
      domesticBoxOffice: '$534,858,444'
    };

    const res = await request(app)
      .post('/api/v1/movies')
      .send(movie);

    expect(res.body).toEqual({
      id: '1',
      ...movie
    });
  });
});
