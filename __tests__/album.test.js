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

  it('gets an album by id via GET', async () => {
    const oddments = await Album.insert({
      name: 'Oddments',
      artist: 'King Gizzard & The Lizard Wizard',
      yearReleased: 2014
    });

    const res = await request(app).get(`/api/v1/albums/${oddments.id}`);

    expect(res.body).toEqual(oddments);
  });

  it('gets all albums via GET', async () => {
    const yeezus = await Album.insert({
      name: 'Yeezus',
      artist: 'Kanye West',
      yearReleased: 2013
    });
    const oddments = await Album.insert({
      name: 'Oddments',
      artist: 'King Gizzard and the Lizard Wizard',
      yearReleased: 2014
    });
    const abbeyRoad = await Album.insert({
      name: 'Abbey Road',
      artist: 'The Beatles',
      yearReleased: 1969
    });
    const roomOnFire = await Album.insert({
      name: 'Room On Fire',
      artist: 'The Strokes',
      yearReleased: 2003
    });

    const res = await request(app).get('/api/v1/albums');

    expect(res.body).toEqual([yeezus, oddments, abbeyRoad, roomOnFire]);
  });

  it('updates an album by id via PUT', async () => {
    const roomOnFire = await Album.insert({
      name: 'Room On Fire',
      artist: 'The Strokes',
      yearReleased: 2005 //wrong year
    });

    const res = await request(app)
      .put(`/api/v1/albums/${roomOnFire.id}`)
      .send({ yearReleased: 2003 }); //update to correct year

    expect(res.body).toEqual({
      ...roomOnFire,
      yearReleased: 2003,
    });
  });

  it('delets an album by id via DELETE', async () => {
    const roomOnFire = await Album.insert({
      name: 'Room On Fire',
      artist: 'The Strokes',
      yearReleased: 2003
    });

    const res = await request(app)
      .delete(`/api/v1/albums/${roomOnFire.id}`);

    expect(res.body).toEqual({
      message: `You deleted ${roomOnFire.id}, one of the greatest albums ever made :(`
    });
  });
});
