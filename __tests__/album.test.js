import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Album from '../lib/models/Album.js';

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

  it('gets a dog by id via GET', async () => {
    const oddments = await Album.insert({
      name: 'Oddments',
      artist: 'King Gizzard & The Lizard Wizard',
      yearReleased: 2014
    });

    const res = await request(app).get(`/api/v1/albums/${oddments.id}`);

    expect(res.body).toEqual(oddments);
  });
});
