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

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM movies WHERE id=$1', [id]
    );

    return new Movie(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM movies'
    );

    return rows.map((row) => new Movie(row));
  }

  static async updateById(id, { title, director, yearReleased, domesticBoxOffice }) {
    const currentMovies = await Movie.getById(id);
    const newTitle = title ?? currentMovies.title;
    const newDirector = director ?? currentMovies.director;
    const newYearReleased = yearReleased ?? currentMovies.yearReleased;
    const newDomesticBoxOffice = domesticBoxOffice ?? currentMovies.domesticBoxOffice;
    
    const { rows } = await pool.query(
      'UPDATE movies SET title=$1, director=$2, year_released=$3, domestic_box_office=$4 WHERE id=$5 RETURNING *',
      [newTitle, newDirector, newYearReleased, newDomesticBoxOffice, id]
    );

    return new Movie(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM movies WHERE id=$1 RETURNING *', [id]);
    
    return new Movie(rows[0]);
  }
}