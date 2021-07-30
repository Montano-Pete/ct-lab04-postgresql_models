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
}