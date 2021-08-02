import pool from '../utils/pool';

export default class Album {
  id;
  title;
  author;
  genre;
  isbn_10;
  page_count;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.author = row.author;
    this.genre = row.genre;
    this.isbn10 = row.isbn_10;
    this.pageCount = row.page_count;
  }

  static async insert({ title, author, genre, isbn10, pageCount }) {
    const { rows } = await pool.query(
      'INSERT INTO books (title, author, genre, isbn_10, page_count) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, author, genre, isbn10, pageCount]
    );

    return new Book(rows[0]);
  }
}
