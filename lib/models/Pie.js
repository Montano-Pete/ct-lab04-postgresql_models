import pool from '../utils/pool';

export default class Pie {
  id;
  type;
  wholePie;
  slice;
  sliceQuantity;

  constructor(row) {
    this.id = row.id;
    this.type = row.type;
    this.wholePie = row.whole_pie;
    this.slice = row.slice;
    this.sliceQuantity = row.slice_quantity;
  }

  static async insert({ type, wholePie, slice, sliceQuantity }) {
    const { rows } = await pool.query(
      'INSERT INTO pies (type, whole_pie, slice, slice_quantity) VALUES ($1, $2, $3, $4) RETURNING *',
      [type, wholePie, slice, sliceQuantity]
    );

    return new Pie(rows[0]);
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM pies WHERE ID=$1', [id]
    );

    return new Pie(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM pies'
    );

    return rows.map((row) => new Pie(row));
  }
}