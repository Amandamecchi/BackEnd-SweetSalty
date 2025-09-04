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
        const { nome_usuario, email, senha } = userData;
        const result = await db.query(
            'INSERT INTO usuarios (nome_usuario, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [nome_usuario, email, senha]
        );
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateUsuario = async (id, userData) => {
    try {
        const { nome_usuario, email, senha } = userData;
        const result = await db.query(
            'UPDATE usuarios SET nome_usuario = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *',
            [nome_usuario, email, senha, id]
        );
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteUsuario = async (id) => {
    try {
        const result = await db.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};
