const express = require('express');
const router = express.Router();
const receitasController = require('../controllers/receitasController');

router.get('/', receitasController.getAllReceitas);

router.get('/:id', receitasController.getReceita);

module.exports = router;
