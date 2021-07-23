import pool from "../utils/pool";

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
}
