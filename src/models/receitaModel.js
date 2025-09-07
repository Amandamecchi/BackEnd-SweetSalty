const pool = require("../config/database");

const getReceitas = async () => {
    const result = await pool.query("SELECT * FROM receitas");
    return result.rows;
};

const getReceitaById = async (id) => {
    const result = await pool.query("SELECT * FROM receitas WHERE id = $1", [id]);
    return result.rows[0];
};

const createReceita = async (receitaData) => {
    try {
        const { nome_receita, ingredientes, modo_preparo, imagem, editar_receita } = receitaData;
        const result = await pool.query(
            'INSERT INTO receitas (nome_receita, ingredientes, modo_preparo, imagem, editar_receita) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nome_receita, ingredientes, modo_preparo, imagem, editar_receita || false]
        );
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const updateReceita = async (id, receitaData) => {
    try {
        const { nome_receita, ingredientes, modo_preparo, imagem, editar_receita } = receitaData;
        const result = await pool.query(
            'UPDATE receitas SET nome_receita = $1, ingredientes = $2, modo_preparo = $3, imagem = $4, editar_receita = $5 WHERE id = $6 RETURNING *',
            [nome_receita, ingredientes, modo_preparo, imagem, editar_receita, id]
        );
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const deleteReceita = async (id) => {
    try {
        const result = await pool.query('DELETE FROM receitas WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

module.exports = { 
    getReceitas, 
    getReceitaById, 
    createReceita, 
    updateReceita, 
    deleteReceita 
};
