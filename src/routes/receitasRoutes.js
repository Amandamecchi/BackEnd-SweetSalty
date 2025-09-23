const express = require('express');
const router = express.Router();
const receitasController = require('../controllers/receitasController');

// GET /receitas - Buscar todas as receitas
router.get('/', receitasController.getAllReceitas);

// GET /receitas/populares - Buscar receitas populares
router.get('/populares', receitasController.getReceitasPopulares);

// GET /receitas/:id - Buscar receita por ID
router.get('/:id', receitasController.getReceita);

// POST /receitas - Criar nova receita
router.post('/', receitasController.createReceita);

// PUT /receitas/:id - Atualizar receita
router.put('/:id', receitasController.updateReceita);

// DELETE /receitas/:id - Deletar receita
router.delete('/:id', receitasController.deleteReceita);

module.exports = router;
