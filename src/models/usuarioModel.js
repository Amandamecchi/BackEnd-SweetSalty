const pool = require("../config/database");

const getUsuarios = async () => {
    const result = await pool.query(
        `SELECT usuarios.*, receitas.nome_receita AS nome_receita
         FROM usuarios 
         LEFT JOIN receitas ON usuarios.receita_id = receitas.id`
    );
    return result.rows;
};

const getUsuarioById = async (id) => {
    const result = await pool.query(
        `SELECT usuarios.*, receitas.nome_receita AS nome_receita
         FROM usuarios 
         LEFT JOIN receitas ON usuarios.receita_id = receitas.id 
         WHERE usuarios.id = $1`, [id]
    );
    return result.rows[0];
};

const createUsuario = async (nome_receita, receita_id) => {
    const result = await pool.query(
        "INSERT INTO usuarios (nome_receita, receita_id) VALUES ($1, $2) RETURNING *",
        [nome_receita, receita_id]
    );
    return result.rows[0];
};

module.exports = { getUsuarios, getUsuarioById, createUsuario };
