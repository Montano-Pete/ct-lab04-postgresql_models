import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Pie from '../lib/models/Pie.js';

describe('pie routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a pie VIA post', async () => {
    const pie = { type: 'Lemon Meringue', wholePie: true, slice: false, sliceQuantity: 0 };
    const res = await request(app)
      .post('/api/v1/pies')
      .send(pie);

    expect(res.body).toEqual({
      id: '1',
      ...pie
    });
  });

  it('gets a pie by id via GET', async () => {
    const pie = await Pie.insert({
      type: 'Lemon Meringue',
      wholePie: true,
      slice: false,
      sliceQuantity: 0
    });

    const res = await request(app).get(`/api/v1/pies/${pie.id}`);

    expect(res.body).toEqual(pie);
  });

  it('gets all pies by id via GET', async () => {
    const marionberry = await Pie.insert({
      type: 'Marionberry',
      wholePie: false,
      slice: true,
      sliceQuantity: 3
    });
    const apple = await Pie.insert({
      type: 'Apple',
      wholePie: true,
      slice: false,
      sliceQuantity: 0
    });
    const chocolate = await Pie.insert({
      type: 'Chocolate',
      wholePie: false,
      slice: true,
      sliceQuantity: 1
    });

    const res = await request(app).get('/api/v1/pies/');

    expect(res.body).toEqual([marionberry, apple, chocolate]);
  });
});
