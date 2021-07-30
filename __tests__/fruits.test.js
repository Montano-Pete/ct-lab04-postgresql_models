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

  it('gets all fruits via GET', async () => {
    const lemon = await Fruit.insert({
      name: 'Lemon',
      sweet: false,
      treeFruit: true
    });
    const watermelon = await Fruit.insert({
      name: 'Watermelon',
      sweet: true,
      treeFruit: false
    });
    const grannySmithApple = await Fruit.insert({
      name: 'Granny Smith Apple',
      sweet: false,
      treeFruit: true
    });
    const blueberry = await Fruit.insert({
      name: 'Blueberry',
      sweet: true,
      treeFruit: false
    });

    const res = await request(app).get('/api/v1/fruits');

    expect(res.body).toEqual([lemon, watermelon, grannySmithApple, blueberry]);
  });
});
