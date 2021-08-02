import pool from '../utils/pool';

export default class Movie {
  id;
  title;
  director;
  yearReleased;
  domesticBoxOffice;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.director = row.director;
    this.yearReleased = row.year_released;
    this.domesticBoxOffice = row.domestic_box_office;
  }

  static async insert({ title, director, yearReleased, domesticBoxOffice }) {
    const { rows } = await pool.query(
      'INSERT INTO movies (title, director, year_released, domestic_box_office) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, director, yearReleased, domesticBoxOffice]
    );

    return new Movie(rows[0]);
  }
}