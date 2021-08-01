import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Movie from '../lib/models/Movie.js';

describe('movie routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});
