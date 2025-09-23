const receitaModel = require("../models/receitaModel");

const getAllReceitas = async (req, res) => {
    try {
        const receitas = await receitaModel.getReceitas();
        // Adicionar URL completa da imagem para cada receita
        const receitasComImagem = receitas.map(receita => ({
            ...receita,
            imagem_url: receita.imagem ? `${req.protocol}://${req.get('host')}/uploads/${receita.imagem}` : null
        }));
        res.json(receitasComImagem);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar receitas." });
    }
};

const getReceitasPopulares = async (req, res) => {
    try {
        const limite = req.query.limite ? parseInt(req.query.limite) : 6;
        const receitas = await receitaModel.getReceitasPopulares(limite);
        // Adicionar URL completa da imagem para cada receita
        const receitasComImagem = receitas.map(receita => ({
            ...receita,
            imagem_url: receita.imagem ? `${req.protocol}://${req.get('host')}/uploads/${receita.imagem}` : null
        }));
        res.json(receitasComImagem);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar receitas populares." });
    }
};

const getReceita = async (req, res) => {
    try {
        const receita = await receitaModel.getReceitaById(req.params.id);
        if (!receita) {
            return res.status(404).json({ message: "Receita não encontrada." });
        }
        // Adicionar URL completa da imagem
        if (receita.imagem) {
            receita.imagem_url = `${req.protocol}://${req.get('host')}/uploads/${receita.imagem}`;
        }
        res.json(receita);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar receita." });
    }
};

const createReceita = async (req, res) => {
    try {
        const novaReceita = await receitaModel.createReceita(req.body);
        // Adicionar URL completa da imagem
        if (novaReceita.imagem) {
            novaReceita.imagem_url = `${req.protocol}://${req.get('host')}/uploads/${novaReceita.imagem}`;
        }
        res.status(201).json(novaReceita);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateReceita = async (req, res) => {
    try {
        const { id } = req.params;
        const receitaAtualizada = await receitaModel.updateReceita(id, req.body);
        if (!receitaAtualizada) {
            return res.status(404).json({ error: 'Receita não encontrada' });
        }
        // Adicionar URL completa da imagem
        if (receitaAtualizada.imagem) {
            receitaAtualizada.imagem_url = `${req.protocol}://${req.get('host')}/uploads/${receitaAtualizada.imagem}`;
        }
        res.status(200).json(receitaAtualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteReceita = async (req, res) => {
    try {
        const { id } = req.params;
        const receitaDeletada = await receitaModel.deleteReceita(id);
        if (!receitaDeletada) {
            return res.status(404).json({ error: 'Receita não encontrada' });
        }
        res.status(200).json({ message: 'Receita deletada com sucesso', receita: receitaDeletada });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { 
    getAllReceitas,
    getReceitasPopulares, 
    getReceita, 
    createReceita, 
    updateReceita, 
    deleteReceita 
};
