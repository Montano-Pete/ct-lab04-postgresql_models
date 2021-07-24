import pool from '../utils/pool';

export default class Album {
  id;
  name;
  artist;
  yearReleased;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.artist = row.artist;
    this.yearReleased = row.year_released;
  }

  static async insert({ name, artist, yearReleased }) {
    const { rows } = await pool.query(
      'INSERT INTO albums (name, artist, year_released) VALUES ($1, $2, $3) RETURNING *',
      [name, artist, yearReleased]
    );

    return new Album(rows[0]);
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM albums WHERE id=$1', [id]
    );

    return new Album(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM albums'
    );

    return rows.map((row) => new Album(row));
  }

  static async updateById(id, { name, artist, yearReleased }) {
    const currentAlbum = await Album.getById(id);
    const newName = name ?? currentAlbum.name;
    const newArtist = artist ?? currentAlbum.artist;
    const newYearReleased = yearReleased ?? currentAlbum.yearReleased;
    
    const { rows } = await pool.query(
      'UPDATE albums SET name=$1, artist=$2, year_released=$3 WHERE id=$4 RETURNING *',
      [newName, newArtist, newYearReleased, id]
    );

    return new Album(rows[0]);
  }
}
