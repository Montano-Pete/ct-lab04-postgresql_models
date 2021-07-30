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
});
