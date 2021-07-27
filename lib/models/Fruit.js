import pool from '../utils/pool';

export default class Fruit {
  id;
  name;
  sweet;
  treeFruit;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.sweet = row.sweet;
    this.treeFruit = row.tree_fruit;
  }

  static async insert({ name, sweet, treeFruit }) {
    const { rows } = await pool.query(
      'INSERT INTO fruits (name, sweet, tree_fruit) VALUES ($1, $2, $3) RETURNING *',
      [name, sweet, treeFruit]
    );

    return new Fruit(rows[0]);
  }
}
