const usuarioModel = require('../models/usuarioModel');

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioModel.getAllUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await usuarioModel.getUsuarioById(id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createUsuario = async (req, res) => {
    try {
        const novoUsuario = await usuarioModel.createUsuario(req.body);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsuarios,
    getUsuario,
    createUsuario
};
