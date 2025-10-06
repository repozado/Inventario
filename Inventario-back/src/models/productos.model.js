const db = require('../config/db');

//devuelve resultado de una consulta a la tabla productos
exports.findAll = async () => {
    const result = await db.query('SELECT * FROM productos');
    return result.rows;
};

//devuelve un producto por su id
exports.findById = async (id) => {
    const result = await db.query('SELECT * FROM productos WHERE id = $1', [id]);
    return result.rows[0];
};

//inserta una nueva bodega
exports.insert = async ({
    nombre, ciudad, stock, precio, bodega_id
}) => {
    const result = await db.query(
        `INSERT INTO productos (nombre, stock, precio, bodega_id) 
        VALUES ($1, $2, $3, $4) RETURNING *`,
        [nombre, stock, precio, bodega_id]
    );
    return result.rows[0];
};


//actualiza un producto por su id
exports.update = async (id, fields) => {
    // Construir la consulta de actualización dinámicamente
    const keys = Object.keys(fields);
    if (keys.length === 0) return await this.findById(id); // No fields to update

    const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');
    const values = keys.map(k => fields[k]);
    values.push(id); // Agregar el id al final para la cláusula WHERE

    const result = await db.query(
        `UPDATE employees SET ${setClause} WHERE employee_id = $${values.length} RETURNING *`,
        values
    );
    return result.rows[0];
};

//elimina una producto por su id
exports.remove = async (id) => {
    const result = await db.query('DELETE FROM productos WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};