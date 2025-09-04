const db = require('../config/database');

const getAllUsuarios = async () => {
    try {
        const result = await db.query('SELECT * FROM usuarios');
        return result.rows;
    } catch (error) {
        throw error;
    }
};

const getUsuarioById = async (id) => {
    try {
        const result = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const createUsuario = async (userData) => {
    try {
        const { nome, email, senha } = userData;
        const result = await db.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, senha]
        );
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario
};
