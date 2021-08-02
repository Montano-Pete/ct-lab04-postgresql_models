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

  static async updateById(id, { type, wholePie, slice, sliceQuantity }) {
    const currentPies = await Pie.getById(id);
    const newType = type ?? currentPies.type;
    const newWholePie = wholePie ?? currentPies.wholePie;
    const newSlice = slice ?? currentPies.slice;
    const newSliceQuantity = sliceQuantity ?? currentPies.sliceQuantity;
    
    const { rows } = await pool.query(
      'UPDATE pies SET type=$1, whole_pie=$2, slice=$3, slice_quantity=$4 WHERE id=$5 RETURNING *',
      [newType, newWholePie, newSlice, newSliceQuantity, id]
    );

    return new Pie(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM pies WHERE id=$1 RETURNING *', [id]);
    
    return new Pie(rows[0]);
  }
}