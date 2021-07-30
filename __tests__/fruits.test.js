import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Fruit from '../lib/models/Fruit.js';

describe('fruit routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a fruit VIA post', async () => {
    const fruit = { name: 'red apple', sweet: true, treeFruit: true };
    const res = await request(app)
      .post('/api/v1/fruits')
      .send(fruit);

    expect(res.body).toEqual({
      id: '1',
      ...fruit
    });
  });

  it('gets a fruit by id via GET', async () => {
    const fruit = await Fruit.insert({
      name: 'Lemon',
      sweet: false,
      treeFruit: true
    });

    const res = await request(app).get(`/api/v1/fruits/${fruit.id}`);

    expect(res.body).toEqual(fruit);
  });
});
