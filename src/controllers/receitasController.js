const receitaModel = require("../models/receitaModel");

const getAllReceitas = async (req, res) => {
    try {
        const receitas = await houseModel.getReceitas();
        res.json(receitas);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar receitas." });
    }
};

const getReceita = async (req, res) => {
    try {
        const receita = await receitaModel.getReceitaById(req.params.id);
        if (!receita) {
            return res.status(404).json({ message: "receita não encontrada." });
        }
        res.json(receita);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar receita." });
    }
};

module.exports = { getAllReceitas, getReceita };
