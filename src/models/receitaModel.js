const pool = require("../config/database");

const getReceitas = async () => {
    const result = await pool.query("SELECT * FROM receitas");
    return result.rows;
};

const getReceitaById = async (id) => {
    const result = await pool.query("SELECT * FROM receitas WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = { getReceitas, getReceitaById };
