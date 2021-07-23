import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('album routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates an album via POST', async () => {
    const yeezus = { name: 'Yeezus', artist: 'Kanye West', yearReleased: 2013 };
    const res = await request(app)
      .post('/api/v1/albums')
      .send(yeezus);

    expect(res.body).toEqual({
      id: '1',
      ...yeezus
    });
  });
});
