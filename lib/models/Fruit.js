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

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM fruits WHERE ID=$1', [id]
    );

    return new Fruit(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM fruits'
    );

    return rows.map((row) => new Fruit(row));
  }

  static async updateById(id, { name, sweet, treeFruit }) {
    const currentFruits = await Fruit.getById(id);
    const newName = name ?? currentFruits.name;
    const newSweet = sweet ?? currentFruits.sweet;
    const newTreeFruit = treeFruit ?? currentFruits.treeFruit;
    
    const { rows } = await pool.query(
      'UPDATE fruits SET name=$1, sweet=$2, tree_fruit=$3 WHERE id=$4 RETURNING *',
      [newName, newSweet, newTreeFruit, id]
    );

    return new Fruit(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM fruits WHERE id=$1 RETURNING *', [id]);
    
    return new Fruit(rows[0]);
  }
}

