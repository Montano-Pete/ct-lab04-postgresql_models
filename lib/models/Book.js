import pool from '../utils/pool';

export default class Book {
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

   static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM books WHERE id=$1', [id]
    );

    return new Book(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM books'
    );

    return rows.map((row) => new Book(row));
  }

  static async updateById(id, { title, author, genre, isbn10, pageCount }) {
    const currentBooks = await Book.getById(id);
    const newTitle = title ?? currentBooks.title;
    const newAuthor = author ?? currentBooks.author;
    const newGenre = genre ?? currentBooks.genre;
    const newIsbn10 = isbn10 ?? currentBooks.isbn10;
    const newPageCount = pageCount ?? currentBooks.pageCount
    
    const { rows } = await pool.query(
      'UPDATE books SET title=$1, author=$2, genre=$3, isbn_10=$4, page_count=$5 WHERE id=$6 RETURNING *',
      [newTitle, newAuthor, newGenre, newIsbn10, newPageCount, id]
    );

    return new Book(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM books WHERE id=$1 RETURNING *', [id]);
    
    return new Book(rows[0]);
  }
}
